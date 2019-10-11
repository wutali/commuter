"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createS3Service = createS3Service;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var S3 = require("aws-sdk/clients/s3"),
    _require = require("lodash"),
    chain = _require.chain; // TODO: Flowtype config


function createS3Service(config) {
  var s3 = new S3(config.s3);

  var fileName = function fileName(path) {
    return chain(path).trimEnd("/").split(config.s3PathDelimiter).last().value();
  };

  var filePath = function filePath(path) {
    return path.replace("".concat(config.s3BasePrefix), "").replace(/^\//, "");
  };

  var s3Prefix = function s3Prefix(path) {
    return config.s3BasePrefix ? "".concat(config.s3BasePrefix, "/").concat(path) : path;
  };

  var dirObject = function dirObject(data) {
    return {
      name: fileName(data.Prefix),
      path: filePath(data.Prefix),
      type: "directory",
      writable: true,
      created: null,
      last_modified: null,
      mimetype: null,
      content: null,
      format: null
    };
  };

  var isNotebook = function isNotebook(s3data) {
    return s3data.Key && s3data.Key.endsWith("ipynb");
  };

  var fileObject = function fileObject(data) {
    return {
      name: fileName(data.Key),
      path: filePath(data.Key),
      type: isNotebook(data) ? "notebook" : "file",
      writable: true,
      created: null,
      last_modified: data.LastModified,
      mimetype: null,
      content: null,
      format: null
    };
  };

  var listObjects = function listObjects(path, callback) {
    var params = {
      Prefix: s3Prefix(path),
      Delimiter: config.s3PathDelimiter,
      // Maximum allowed by S3 API
      MaxKeys: 2147483647,
      //remove the folder name from listing
      StartAfter: s3Prefix(path)
    };
    s3.listObjectsV2(params, function (err, data) {
      if (err || !data) {
        callback(err);
        return;
      }

      if (!data.Contents) {
        callback(new Error("Missing contents from S3 Response"));
        return;
      }

      if (!data.CommonPrefixes) {
        callback(new Error("Missing CommonPrefixes from S3 Response"));
        return;
      }

      var files = data.Contents.map(fileObject);
      var dirs = data.CommonPrefixes.map(dirObject);
      callback(null, {
        name: fileName(path),
        path: path,
        type: "directory",
        writable: true,
        created: null,
        last_modified: null,
        mimetype: null,
        content: [].concat((0, _toConsumableArray2["default"])(files), (0, _toConsumableArray2["default"])(dirs)),
        format: "json"
      });
    });
  };

  var getObject = function getObject(path, callback) {
    s3.getObject({
      Key: s3Prefix(path)
    }, function (err, data) {
      if (err) {
        callback(err);
        return;
      } else {
        // The Key does not exist on getObject, it's expected to use the path above
        var s3Response = (0, _assign["default"])({}, data, {
          Key: s3Prefix(path)
        });
        var content = s3Response.Body.toString();

        if (isNotebook(s3Response)) {
          try {
            content = JSON.parse(content);
          } catch (err) {
            callback(err);
            return;
          }
        } // Notebook files end up as pure json // All other files end up as pure strings in the content field


        var file = (0, _assign["default"])({}, fileObject(s3Response), {
          content: content
        });
        callback(null, file);
      }
    });
  };

  var deleteObject = function deleteObject(path, callback) {
    s3.deleteObject({
      Key: s3Prefix(path)
    }, function (err, data) {
      if (err) callback(err);else callback(null, data);
    });
  };

  var deleteObjects = function deleteObjects(path, callback) {
    var objects = [{
      Key: s3Prefix(path)
    }];
    var callStack = 1;

    var getObjects = function getObjects(path) {
      return new _promise["default"](function (resolve, reject) {
        listObjects(path, function (err, data) {
          if (err) {
            reject(err);
          }

          if (!data.content) {
            reject(err);
          }

          callStack -= 1;
          data.content.forEach(function (o) {
            if (o.type == "directory") {
              callStack += 1; //recurse

              getObjects(o.path.substr(1)).then(function () {
                return resolve();
              });
            } else objects.push({
              Key: s3Prefix(o.path.substr(1))
            });
          });
          if (callStack == 0) resolve(); // notify end
        });
      });
    };

    var s3Delete = function s3Delete() {
      s3.deleteObjects({
        Delete: {
          Objects: objects,
          Quiet: true
        }
      }, function (err, data) {
        if (err) callback(err);else callback(null, data);
      });
    };

    getObjects(path).then(s3Delete);
  };

  var uploadObject = function uploadObject(path, body, callback) {
    s3.upload({
      Key: s3Prefix(path),
      Body: (0, _stringify["default"])(body)
    }, function (err, data) {
      if (err) callback(err);else callback(null, data);
    });
  };

  return {
    listObjects: listObjects,
    getObject: getObject,
    deleteObject: deleteObject,
    deleteObjects: deleteObjects,
    uploadObject: uploadObject
  };
}