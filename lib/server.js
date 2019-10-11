"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _require = require("url"),
    parse = _require.parse;

var http = require("http");

var express = require("express");

var morgan = require("morgan");

var log = require("log");

var front = require("../frontend");

var config = require("./config");

function createServer() {
  var frontend = front.createNextApp();
  return frontend.app.prepare().then(function () {
    var app = express();
    app.use(morgan("common"));
    log.info("Node env: ".concat(config.nodeEnv));

    var router = require("./routes");
    /**
     *
     * /view/ router
     *
     * On some filetypes it will serve the next.js app and on others it will
     * redirect to the literal file. This is to allow for resolving relative
     * assets like images within notebooks.
     */


    var suffixRegex = /(?:\.([^.]+))?$/;
    var renderSuffixes = new _set["default"](["ipynb", "html", "json", "md", "rmd"]);
    var renderAccepts = new _set["default"](["text/html", "application/xhtml+xml"]);

    var viewHandler = function viewHandler(req, res) {
      var presuffix = suffixRegex.exec(req.path);

      if (!presuffix) {
        return null;
      }

      var suffix = (presuffix[1] || "").toLowerCase();
      var accepts = (req.headers.accept || "").split(",");

      if ( // If one of our suffixes is a renderable item
      renderSuffixes.has(suffix) || // If the file is requested as `text/html` first and foremost, we'll also
      // render our file viewer
      renderAccepts.has(accepts[0]) || renderAccepts.has(accepts[1])) {
        var _parse = parse(req.url, true),
            query = _parse.query;

        var viewPath = req.params["0"] || "/";
        var q = (0, _assign["default"])({}, {
          viewPath: viewPath
        }, query);
        return frontend.app.render(req, res, "/view", q);
      }

      var newPath = req.path.replace(/^\/view/, "/files");
      res.redirect(newPath);
      return;
    };
    /**
     * Express middleware for letting our next.js frontend do the handling
     */


    var passToNext = function passToNext(req, res) {
      return frontend.handle(req, res);
    };

    router.get(["/view", "/view*"], viewHandler);
    router.get("*", passToNext); // TODO: Leaving this here for the eventual baseURL handling

    var baseURI = "/";
    app.use(baseURI, router); // TODO: This is duplicate until we're doing proper baseURL handling

    app.get(["/view", "/view*"], viewHandler);
    app.use(passToNext);
    var server = http.createServer(app);
    return new _promise["default"](function (accept) {
      // $FlowFixMe
      server.listen(config.port, function () {
        return accept(server);
      });
    });
  });
}

module.exports = createServer;