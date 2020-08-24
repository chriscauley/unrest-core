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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AddModel(_ref) {
  var match = _ref.match;
  var history = (0, _reactRouterDom.useHistory)();
  var model_name = match.params.model_name;

  var _alert$useAlert = _core.alert.useAlert(),
      _alert$useAlert2 = _slicedToArray(_alert$useAlert, 2),
      _ = _alert$useAlert2[0],
      success = _alert$useAlert2[1].success;

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