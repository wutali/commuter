"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createDiscoveryRouter = createDiscoveryRouter;

var express = require("express"); // eslint-disable-next-line no-unused-vars


function createDiscoveryRouter(options) {
  var router = express.Router();
  router.get("/*", function (req, res) {
    res.json({
      results: []
    });
  });
  return router;
}