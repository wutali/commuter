"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;

var express = require("express"),
    s3Proxy = require("s3-proxy"); // TODO: Flow type config


function createRouter(config) {
  var router = express.Router();
  router.get("/*", s3Proxy({
    bucket: config.s3.params.Bucket,
    prefix: config.s3BasePrefix,
    accessKeyId: config.s3.accessKeyId,
    secretAccessKey: config.s3.secretAccessKey,
    endpoint: config.s3.endpoint,
    overrideCacheControl: "max-age=100000"
  }));
  return router;
}