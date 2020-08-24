"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _css = _interopRequireDefault(require("@unrest/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Breadcrumbs(_ref) {
  var current = _ref.current,
      parts = _ref.parts;

  if (!parts) {
    parts = (0, _reactRouterDom.useLocation)().pathname.split('/').filter(Boolean);
  }

  if (!current) {
    current = parts.pop();
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "mx-2"
  }, " / "), parts.map(function (p, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: p
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      className: _css["default"].link(),
      to: "/".concat(parts.slice(0, i + 1).join('/'), "/")
    }, p), /*#__PURE__*/_react["default"].createElement("span", {
      className: "mx-2"
    }, " / "));
  }), current);
}