"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var path = require("path");

var jsonfile = require("jsonfile");

var nbformatv4Schema = require("nbschema").v4;

var writeFile = function writeFile(schema) {
  return jsonfile.writeFileSync(path.resolve(__dirname, "commuter.es.mapping.json"), schema, {
    spaces: 2
  });
};

var add_type_info = function add_type_info(nbSchema) {
  var properties = nbSchema.properties.metadata.properties; //codemirror_mode key needs a type, and nbformat specifies
  //   "oneOf": [
  //   {
  //     "type": "string"
  //   },
  //   {
  //     "type": "object"
  //   }
  // ]

  properties.language_info.properties.codemirror_mode.type = "object"; // ES doesn't support array types. Instead use object type (also handles array of object)
  //https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html

  properties.authors.type = "object";
  return (0, _assign["default"])({}, properties);
};

var nteractSchema = function nteractSchema() {
  return jsonfile.readFileSync(path.resolve(__dirname, "nteract.metadata.schema.json"));
};

var getCommuterSchema = function getCommuterSchema() {
  return {
    mappings: {
      notebooks: {
        _timestamp: {
          enabled: true
        },
        properties: {
          name: {
            description: "Notebook name",
            type: "string"
          },
          path: {
            description: "Storage location of the notebook",
            type: "string"
          },
          created: {
            description: "Date created",
            index: "not_analyzed",
            type: "string"
          },
          last_modified: {
            description: "Date modified",
            index: "not_analyzed",
            type: "string"
          },
          mimetype: {
            description: "Content type",
            type: "string"
          },
          format: {
            description: "Format type",
            type: "string"
          },
          type: {
            description: "Notebook type",
            type: "string"
          },
          metadata: {
            properties: (0, _assign["default"])({}, add_type_info(nbformatv4Schema), nteractSchema())
          }
        }
      }
    }
  };
}; //IIFE


{
  writeFile(getCommuterSchema());
}