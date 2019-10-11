"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createDiscoveryService = createDiscoveryService;

var bodybuilder = require("bodybuilder"),
    elasticsearch = require("elasticsearch");

function createDiscoveryService(options) {
  var client = new elasticsearch.Client(options);

  var list = function list(cb, error) {
    return client.search({
      index: "commuter",
      type: "notebooks",
      body: bodybuilder().sort("last_modified", "desc").size(1000).build()
    }).then(function (resp) {
      cb({
        results: resp.hits.hits.map(function (hit) {
          return hit._source;
        })
      });
    }, function (err) {
      error(err.message);
    });
  };

  return {
    list: list
  };
}