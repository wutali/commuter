"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;

var fs = require("fs");

var path = require("path");

var express = require("express");

var sanitizeFilePath = require("./fs").sanitizeFilePath;

function createRouter(options) {
  if (!options.local.baseDirectory) {
    throw new Error("Base directory must be specified for the local provider");
  }

  var router = express.Router();
  router.get("/*", function (req, res) {
    var unsafeFilePath = req.params["0"];
    var filePath = path.join(options.local.baseDirectory, sanitizeFilePath(unsafeFilePath)); // Assume it's a file by default, fall to error handling otherwise

    var rs = fs.createReadStream(filePath);
    rs.on("error", function (err) {
      var errorResponse = {
        message: "".concat(err.message, ": ").concat(filePath)
      };

      if (err.code === "ENOENT" || err.code === "EACCES") {
        res.status(404).send(errorResponse);
        return;
      }

      console.error(err.stack);
      res.status(500).send(errorResponse);
    });
    rs.pipe(res);
  });
  return router;
}