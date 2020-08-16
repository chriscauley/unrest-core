"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;

var _react = _interopRequireDefault(require("react"));

var _css = _interopRequireDefault(require("@unrest/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Modal(_ref) {
  var close = _ref.close,
      children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.outer()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.mask(),
    onClick: close
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.content()
  }, title && /*#__PURE__*/_react["default"].createElement("h2", null, title), children));
}