"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AddModel;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@unrest/core");

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AddModel(_ref) {
  var match = _ref.match;
  var history = (0, _reactRouterDom.useHistory)();
  var model_name = match.params.model_name;

  var _alert$use = _core.alert.use(),
      success = _alert$use.success;

  var onSuccess = function onSuccess(_ref2) {
    var id = _ref2.id;
    success("".concat((0, _utils.titleCase)(model_name), " created you can now edit it below"));
    history.push("/admin/user/edit/".concat(id, "/"));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs["default"], {
    parts: ['admin', 'user'],
    current: "add ".concat(model_name)
  })), /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "Admin".concat((0, _utils.pascalCase)(model_name), "Form"),
    onSuccess: onSuccess
  }));
}