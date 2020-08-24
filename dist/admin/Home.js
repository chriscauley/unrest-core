"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _utils = require("./utils");

var _register = _interopRequireDefault(require("./register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Home() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Admin"), /*#__PURE__*/_react["default"].createElement("table", {
    className: "table table-striped w-full"
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, _register["default"].models.map(function (_ref) {
    var model_name = _ref.model_name;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: model_name
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: "/admin/".concat(model_name, "/")
    }, (0, _utils.titleCase)(model_name))));
  }))));
}