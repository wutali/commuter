"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;

var express = require("express");

var fs = require("./fs");

function createRouter(options) {
  if (!options.local.baseDirectory) {
    throw new Error("Base directory must be specified for the local provider");
  }

  var router = express.Router();
  router.get("/*", function (req, res) {
    var path = req.params["0"];
    fs.get(options, path).then(function (content) {
      res.json(content);
    })["catch"](function (err) {
      var errorResponse = {
        message: "".concat(err.message, ": ").concat(path)
      };

      if (err.code === "ENOENT") {
        res.status(404).json(errorResponse);
        return;
      }

      if (err.code === "EACCES") {
        // When unable to access a file, assume 404 in the GitHub security style
        // Even though we're providing all the information in the response...
        res.status(404).json(errorResponse);
        return;
      }

      res.status(500).json(errorResponse);
    });
  });
  router.post("/*", function (req, res) {
    var path = req.params["0"];
    fs.post(options, path, req.body).then(function () {
      return res.status(201).send();
    })["catch"](function (err) {
      var errorResponse = {
        message: "".concat(err.message, ": ").concat(path)
      };
      res.status(500).json(errorResponse);
    });
  });
  return router;
}