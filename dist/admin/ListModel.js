"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListModel;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@unrest/core");

var _css = _interopRequireDefault(require("@unrest/css"));

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

var _register = _interopRequireDefault(require("./register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var api = (0, _reactRestHook["default"])('/api/admin/${model_name}/${search}');

var ObjectList = function ObjectList(props) {
  var model_name = props.model_name,
      list_display = props.list_display;

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      search = _useLocation.search;

  var _api$use = api.use({
    model_name: model_name,
    search: search
  }),
      _api$use$items = _api$use.items,
      items = _api$use$items === void 0 ? [] : _api$use$items,
      apiProps = _objectWithoutProperties(_api$use, ["items"]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-xl mx-auto mb-4"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "table table-striped w-full"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null), list_display.map(function (attr) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: attr
    }, attr);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: "/admin/".concat(model_name, "/edit/").concat(item.id, "/"),
      className: _css["default"].link('fa fa-edit')
    })), list_display.map(function (attr) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: attr
      }, item[attr]);
    }));
  }))), /*#__PURE__*/_react["default"].createElement(_core.Pagination, apiProps));
};

function ListModel(_ref) {
  var match = _ref.match;
  var model_name = match.params.model_name;

  var _register$getModel = _register["default"].getModel(model_name),
      list_display = _register$getModel.list_display,
      can_add = _register$getModel.can_add;

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-4 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs["default"], null), can_add && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/admin/".concat(model_name, "/add/"),
    className: _css["default"].button()
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: 'fa fa-plus mr-2'
  }), "New ", model_name)), /*#__PURE__*/_react["default"].createElement(ObjectList, {
    model_name: model_name,
    list_display: list_display
  }));
}