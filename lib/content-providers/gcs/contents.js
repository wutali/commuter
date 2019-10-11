"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;
exports.isDir = void 0;

var express = require("express");

var _require = require("./gcs"),
    createGcsService = _require.createGcsService; // TODO: typing here reflects what was put in place before, this could be
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
};

function createRouter(config) {
  var router = express.Router();
  var gcsService = createGcsService(config);
  router.get("/*", function (req, res) {
    var path = req.params["0"];

    var cb = function cb(err, data) {
      if (err) res.status(500).json(errObject(err, path));else res.json(data);
    };

    if (isDir(path)) {
      gcsService.listObjects(path, cb);
    } else {
      gcsService.getObject(path, function (err, data) {
        if (err && err.code === 404) {
          gcsService.listObjects(path.replace(/\/?$/, "/"), cb);
          return;
        }

        if (err) res.status(500).json(errObject(err, path));else res.json(data);
      });
    }
  });
  router.post("/*", function (req, res) {
    var path = req.params["0"];

    var cb = function cb(err) {
      if (err) res.status(500).json(errObject(err, path));else res.status(201).send();
    };

    gcsService.uploadObject(path, req.body, cb);
  });
  return router;
}