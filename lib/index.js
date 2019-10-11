"use strict";

var log = require("log");

var createServer = require("./server");

createServer().then(function (server) {
  var port = server.address().port;
  console.log(log);
  log.info("Commuter server listening on port " + port);
})["catch"](function (e) {
  console.error(e);
  console.error(e.stack);
  process.exit(-10);
});