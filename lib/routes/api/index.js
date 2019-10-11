"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var defaultContentTypeMiddleware = function defaultContentTypeMiddleware(req, res, next) {
  req.headers["content-type"] = req.headers["content-type"] || "application/json";
  next();
};

function createAPIRouter(api) {
  var router = express.Router();
  router.use(defaultContentTypeMiddleware);
  router.use(bodyParser.json({
    limit: "50mb"
  })); //50mb is the current threshold

  router.use(bodyParser.urlencoded({
    extended: true
  }));
  router.use("/ping", function (req, res) {
    res.json({
      message: "pong"
    });
  });
  router.use("/contents", api.contents);
  router.use("/v1/discovery", api.discovery);
  return router;
}

module.exports = createAPIRouter;