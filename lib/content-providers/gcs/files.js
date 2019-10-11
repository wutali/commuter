"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createRouter = createRouter;

var _require = require("@google-cloud/storage"),
    Storage = _require.Storage;

var express = require("express");

function createRouter(config) {
  var router = express.Router();
  var gcs = new Storage();
  router.get("/*", function (req, res, next) {
    var key = decodeURIComponent(req.originalUrl.substr(req.baseUrl.length + 1));
    var queryIndex = key.indexOf('?');

    if (queryIndex !== -1) {
      key = key.substr(0, queryIndex);
    }

    if (!key) {
      return res.status(404).send('GCS key is missing.');
    }

    var readStream = gcs.bucket(config.bucket).file(key).createReadStream().on('error', function (err) {
      // If the code is PreconditionFailed and we passed an IfNoneMatch param
      // the object has not changed, so just return a 304 Not Modified response.
      if (err.code === 'NotModified' || err.code === 'PreconditionFailed' && s3Params.IfNoneMatch) {
        return res.status(304).end();
      }

      if (err.code === 404) {
        return res.status(404).send("Not found: ".concat(key));
      }

      return next(err);
    });
    readStream.pipe(res);
  });
  return router;
}