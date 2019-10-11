"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.sanitizeFilePath = sanitizeFilePath;
exports.get = get;
exports.post = post;

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

/**
 * Local storage provider for commuter
 */
var path = require("path");

var fs = require("fs-extra");

/**
 * Convert a single dot or slash to ''
 *
 * This is for conforming to the Jupyter contents API for the `/` endpoint
 */
function cleanBaseDir(s) {
  if (s === "." || s === "/") {
    return "";
  }

  return s;
}

function createContentResponse(parsedFilePath, // $FlowFixMe: fs-extra
stat) {
  var name = cleanBaseDir(parsedFilePath.base);
  var filePath = cleanBaseDir(path.join(parsedFilePath.dir, parsedFilePath.base)); // $FlowFixMe: fs-extra

  var writable = Boolean(fs.constants.W_OK & stat.mode);
  var created = stat.birthtime;
  var last_modified = stat.mtime;

  if (stat.isDirectory()) {
    return {
      type: "directory",
      mimetype: null,
      format: "json",
      content: null,
      writable: writable,
      name: name === "." ? "" : name,
      path: filePath === "." ? "" : filePath,
      created: created,
      last_modified: last_modified
    };
  } else if (stat.isFile()) {
    // TODO: Handle notebook differently
    if (parsedFilePath.ext === ".ipynb") {
      return {
        type: "notebook",
        mimetype: null,
        format: "json",
        content: null,
        writable: writable,
        name: name,
        path: filePath,
        created: created,
        last_modified: last_modified
      };
    } // TODO: Mimetype detection


    return {
      type: "file",
      mimetype: null,
      format: "text",
      content: null,
      writable: writable,
      name: name,
      path: filePath,
      created: created,
      last_modified: last_modified
    };
  }

  throw new Error("Content listings can not be created from something that isn't a file or directory");
}

function createContentPromise(options, filePath) {
  var fullPath = path.join(options.local.baseDirectory, filePath);
  var parsedFilePath = path.parse(filePath);
  return new _promise["default"](function (resolve, reject) {
    // perform a STAT call to create contents response
    fs.stat(fullPath, function (err, stat) {
      if (err) {
        // Could also resolve with an error, then filter it out
        // TODO: Decide on what to do in error case
        reject(err);
        return;
      }

      if (!(stat.isDirectory() || stat.isFile())) {
        // Mark non-directory and non-file as to be ignored
        reject(new Error("".concat(filePath, " is not a directory or file")));
      }

      resolve(createContentResponse(parsedFilePath, stat));
    });
  });
}

function sanitizeFilePath(unsafeFilePath) {
  return path.join(path.normalize(unsafeFilePath) // Remove leading `..`
  .replace(/^(\.\.[\/\\])+/, "") // Remove leading '/'
  .replace(/^([\/\\])+/, ""));
}

function get(options, unsafeFilePath) {
  var filePath = sanitizeFilePath(unsafeFilePath); // TODO: filePath should be normalized

  var contentP = createContentPromise(options, filePath);
  return contentP.then(function (content) {
    if (content.type === "directory") {
      return getDirectory(options, content);
    }

    if (content.type === "file") {
      return getFile(options, content);
    }

    if (content.type === "notebook") {
      return getNotebook(options, content);
    }

    return {
      reason: "Unsupported content",
      message: "Unrecognized content type \"".concat(content.type, "\"")
    };
  });
}

function post(options, unsafeFilePath, content) {
  var filePath = path.join(options.local.baseDirectory, sanitizeFilePath(unsafeFilePath));
  return fs.outputFile(filePath, (0, _stringify["default"])(content));
}

function getDirectory(options, directory) {
  return new _promise["default"](function (resolve, reject) {
    fs.readdir(path.join(options.local.baseDirectory, directory.path), function (err, listing) {
      if (err) {
        reject(err);
        return;
      } // Perform a stat call on each file, creating a promise for each
      // return value


      var contentPromises = listing.map( // map across each file listed from the directory
      function (fname) {
        return (// creating a promise for each filename
          createContentPromise(options, path.join(directory.path, fname))["catch"](function (err) {
            // Not sure what our flow should be for errors
            // For now we'll log it since we want the rest of the directory to
            // show.
            // TODO: Verify how jupyter handles error cases on stat calls to files
            //       in the directory
            console.error(err);
            return null;
          })
        );
      });

      _promise["default"].all(contentPromises) // $FlowFixMe
      .then(function (contents) {
        return contents.filter(function (x) {
          return !(x === null || x === undefined);
        });
      }).then(function (contents) {
        resolve((0, _assign["default"])({}, directory, {
          content: contents
        }));
      });
    });
  });
}

function getFile(options, file) {
  return new _promise["default"](function (resolve, reject) {
    // TODO: Should we support a streaming interface or nah
    // $FlowFixMe: fs-extra
    fs.readFile(path.join(options.local.baseDirectory, file.path), function (err, data) {
      if (err) {
        reject(err);
      }

      var str = data.toString("utf-8");
      var format = file.format;

      for (var i = 0; i < str.length; ++i) {
        if (str.charCodeAt(i) === 65533) {
          // 65533 is the magic number for unknown character
          // We will not send the content, as the interface
          // currently doesn't render it.  But this is a bad
          // contract.
          //
          // We denote the format as null rather than some strange format since we need to
          // stay spec compliant with jupyter
          format = null;
          str = "";
          break;
        }
      }

      resolve((0, _assign["default"])({}, file, {
        content: str,
        format: format
      }));
    });
  });
}

function getNotebook(options, notebook) {
  return new _promise["default"](function (resolve, reject) {
    // TODO: Should we support a streaming interface or nah
    // $FlowFixMe: fs-extra
    fs.readFile(path.join(options.local.baseDirectory, notebook.path), function (err, data) {
      if (err) {
        reject(err);
      }

      try {
        var notebookJSON = JSON.parse(data.toString());
        resolve((0, _assign["default"])({}, notebook, {
          content: notebookJSON
        }));
        return;
      } catch (err) {
        reject(err);
      }
    });
  });
}