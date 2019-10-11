"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createDiscoveryRouter = createDiscoveryRouter;

var express = require("express");

var _require = require("./elasticSearch"),
    createDiscoveryService = _require.createDiscoveryService;

function createDiscoveryRouter(discoveryOptions) {
  var discoveryService = createDiscoveryService(discoveryOptions.elasticsearch);
  var router = express.Router();
  router.get("/*", function (req, res) {
    var successCb = function successCb(data) {
      return res.json(data);
    };

    var errorCb = function errorCb(err) {
      return res.status(err.statusCode).json({
        message: err.message
      });
    };

    discoveryService.list(successCb, errorCb);
  });
  return router;
}