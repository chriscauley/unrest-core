"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Routes = _interopRequireDefault(require("./Routes"));

var _register = _interopRequireDefault(require("./register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Routes: _Routes["default"],
  register: _register["default"]
};
exports["default"] = _default;