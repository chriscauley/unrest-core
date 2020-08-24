"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _css = _interopRequireDefault(require("@unrest/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PLink = function PLink(_ref) {
  var active = _ref.active,
      props = _objectWithoutProperties(_ref, ["active"]);

  var Tag = active ? _reactRouterDom.Link : 'span';

  if (active) {
    props.className = _css["default"].link();
  }

  return /*#__PURE__*/_react["default"].createElement(Tag, props);
};

function Pagination(_ref2) {
  var page = _ref2.page,
      pages = _ref2.pages,
      next_page = _ref2.next_page,
      prev_page = _ref2.prev_page;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement(PLink, {
    to: "?page=".concat(page - 1),
    active: prev_page
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("div", null, "Page ", page, " of ", pages), /*#__PURE__*/_react["default"].createElement(PLink, {
    to: "?page=".concat(next_page),
    active: next_page
  }, "Next"));
}