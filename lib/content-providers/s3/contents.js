"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;
exports.isDir = void 0;

var express = require("express");

var _require = require("./s3"),
    createS3Service = _require.createS3Service; // TODO: typing here reflects what was put in place before, this could be
// more strict while letting flow do the work vs. the testing of common functions


var isDir = function isDir(path) {
  return !path || path && path.endsWith("/");
};

exports.isDir = isDir;

var errObject = function errObject(err, path) {
  return {
    message: "".concat(err.message, ": ").concat(path),
    reason: err.code
  };
}; // TODO: Flow type our config


function createRouter(config) {
  var router = express.Router();
  var s3Service = createS3Service(config);
  router.get("/*", function (req, res) {
    var path = req.params["0"];

    var cb = function cb(err, data) {
      if (err) res.status(500).json(errObject(err, path));else res.json(data);
    };

    if (isDir(path)) s3Service.listObjects(path, cb);else {
      s3Service.getObject(path, function (err, data) {
        if (err && err.code === "NoSuchKey") {
          s3Service.listObjects(path.replace(/\/?$/, "/"), cb);
          return;
        }

        if (err) res.status(500).json(errObject(err, path));else res.json(data);
      });
    }
  });
  router["delete"]("/*", function (req, res) {
    var path = req.params["0"];

    var cb = function cb(err) {
      if (err) res.status(500).json(errObject(err, path));else res.status(204).send(); //as per jupyter contents api
    };

    if (isDir(path)) s3Service.deleteObjects(path, cb);else s3Service.deleteObject(path, cb);
  });
  router.post("/*", function (req, res) {
    var path = req.params["0"];

    var cb = function cb(err) {
      if (err) res.status(500).json(errObject(err, path));else res.status(201).send();
    };

    s3Service.uploadObject(path, req.body, cb);
  });
  return router;
}