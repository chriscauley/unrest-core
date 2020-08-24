"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dropdown;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _hooks = require("./hooks");

var _css = _interopRequireDefault(require("@unrest/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DropdownLink = function DropdownLink(_ref) {
  var disabled = _ref.disabled,
      badge = _ref.badge,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["disabled", "badge", "children"]);

  var Tag = props.to ? _reactRouterDom.Link : 'a';

  if (disabled) {
    Tag = 'div';
    delete props.onClick;
  }

  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
    className: _css["default"].dropdown.item({
      disabled: disabled
    })
  }, props), children, badge ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _css["default"].badge.danger()
  }, badge) : null);
};

var prepLink = function prepLink(link) {
  return typeof link === 'string' ? {
    children: link
  } : link;
};

function Dropdown(props) {
  var _useSelect = (0, _hooks.useSelect)(),
      open = _useSelect.open,
      toggle = _useSelect.toggle,
      toggleRef = _useSelect.toggleRef,
      childRef = _useSelect.childRef;

  var user = props.user,
      badge = props.badge,
      _props$links = props.links,
      links = _props$links === void 0 ? [] : _props$links,
      children = props.children,
      className = props.className,
      title = props.title;

  var funct = function funct(value) {
    return typeof value === 'function' ? value(user) : value;
  };

  var _badge = funct(badge, badge);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].dropdown.outer()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].dropdown.toggle(className),
    onClick: toggle,
    ref: toggleRef
  }, title, badge ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _css["default"].badge.danger()
  }, badge) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].dropdown.menu(open ? 'block' : 'hidden')
  }, children && /*#__PURE__*/_react["default"].createElement("div", {
    ref: childRef
  }, children), links.map(function (link, i) {
    return /*#__PURE__*/_react["default"].createElement(DropdownLink, _extends({}, prepLink(link), {
      key: i
    }));
  })));
}