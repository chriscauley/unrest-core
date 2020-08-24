"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var models = [];
var model_map = {};

var register = function register(model) {
  var model_name = model.model_name;

  if (model_map[model_name]) {
    throw "Model \"".concat(model_name, "\" is already registered");
  }

  models.push(model);
  model_map[model_name] = model;
};

Object.assign(register, {
  models: models,
  getModel: function getModel(model_name) {
    return model_map[model_name];
  }
});
var _default = register;
exports["default"] = _default;