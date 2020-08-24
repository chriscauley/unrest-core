"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AdminRoutes;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactAuth = _interopRequireDefault(require("@unrest/react-auth"));

var _AddModel = _interopRequireDefault(require("./AddModel"));

var _Home = _interopRequireDefault(require("./Home"));

var _ListModel = _interopRequireDefault(require("./ListModel"));

var _EditModel = _interopRequireDefault(require("./EditModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AdminRoute(_ref) {
  var component = _ref.component,
      props = _objectWithoutProperties(_ref, ["component"]);

  component = _reactAuth["default"].required(component, {
    roles: ['admin']
  });
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({
    component: component
  }, props));
}

function AdminRoutes() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(AdminRoute, {
    exact: true,
    component: _Home["default"],
    path: '/admin/'
  }), /*#__PURE__*/_react["default"].createElement(AdminRoute, {
    exact: true,
    component: _ListModel["default"],
    path: '/admin/:model_name/'
  }), /*#__PURE__*/_react["default"].createElement(AdminRoute, {
    component: _AddModel["default"],
    path: '/admin/:model_name/add/'
  }), /*#__PURE__*/_react["default"].createElement(AdminRoute, {
    component: _EditModel["default"],
    path: '/admin/:model_name/edit/:id/'
  }));
}