"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createGcsService = createGcsService;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _require = require("@google-cloud/storage"),
    Storage = _require.Storage,
    _require2 = require("lodash"),
    chain = _require2.chain;

function createGcsService(config) {
  var gcs = new Storage();

  var fileName = function fileName(path) {
    return chain(path).trimEnd("/").split(config.pathDelimiter).last().value();
  };

  var filePath = function filePath(path) {
    return path.replace("".concat(config.basePrefix), "").replace(/^\//, "");
  };

  var gcsPrefix = function gcsPrefix(path) {
    return config.basePrefix ? "".concat(config.basePrefix, "/").concat(path) : path;
  };

  var dirObject = function dirObject(prefix) {
    return {
      name: fileName(prefix),
      path: filePath(prefix),
      type: "directory",
      writable: true,
      created: null,
      last_modified: null,
      mimetype: null,
      content: null,
      format: null
    };
  };

  var isNotebook = function isNotebook(data) {
    return data.name && data.name.endsWith("ipynb");
  };

  var fileObject = function fileObject(data) {
    return {
      name: fileName(data.name),
      path: filePath(data.name),
      type: isNotebook(data) ? "notebook" : "file",
      writable: true,
      created: data.metadata.timeCreated,
      last_modified: data.metadata.updated,
      mimetype: null,
      content: null,
      format: null
    };
  };

  var listObjects = function listObjects(path, callback) {
    var query = {
      prefix: gcsPrefix(path),
      delimiter: config.pathDelimiter,
      autoPaginate: false
    };
    var dirs = [],
        files = [],
        bucket = gcs.bucket(config.bucket);

    var cb = function cb(err, data, next, res) {
      if (res.prefixes) dirs.push.apply(dirs, (0, _toConsumableArray2["default"])(res.prefixes.map(dirObject)));
      if (data) files.push.apply(files, (0, _toConsumableArray2["default"])(data.map(fileObject)));

      if (next) {
        bucket.getFiles(next, cb);
      } else {
        callback(null, {
          name: fileName(path),
          path: path,
          type: "directory",
          writable: true,
          created: null,
          last_modified: null,
          mimetype: null,
          content: [].concat(files, dirs),
          format: "json"
        });
      }
    };

    bucket.getFiles(query, cb);
  };

  var getObject = function getObject(path, callback) {
    gcs.bucket(config.bucket).file(gcsPrefix(path)).get({}, function (err, file) {
      if (err) {
        callback(err);
        return;
      }

      file.download({}, function (err, body) {
        if (err) {
          callback(err);
          return;
        }

        var content = body.toString();

        if (isNotebook(file)) {
          try {
            content = JSON.parse(content);
          } catch (err) {
            callback(err);
            return;
          }
        }

        var ret = (0, _assign["default"])({}, fileObject(file), {
          content: content
        });
        callback(null, ret);
      });
    });
  };

  var uploadObject = function uploadObject(path, body, callback) {
    gcs.bucket(config.bucket).file(path).save((0, _stringify["default"])(body), null, function (err, data) {
      if (err) callback(err);else callback(null, data);
    });
  };

  return {
    listObjects: listObjects,
    getObject: getObject,
    uploadObject: uploadObject
  };
}