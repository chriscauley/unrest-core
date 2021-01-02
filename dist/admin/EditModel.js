"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditUser;

var _react = _interopRequireDefault(require("react"));

var _core = require("@unrest/core");

var _css = _interopRequireDefault(require("@unrest/css"));

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var api = (0, _reactRestHook["default"])('/api/admin/${model_name}/${id}/preview_delete/');

function ConfirmDelete(_ref) {
  var model_name = _ref.model_name,
      id = _ref.id,
      cancel = _ref.cancel,
      history = _ref.history;

  var _api$use = api.use({
    model_name: model_name,
    id: id
  }),
      _api$use$records = _api$use.records,
      records = _api$use$records === void 0 ? {} : _api$use$records;

  var url = "/api/admin/".concat(model_name, "/").concat(id, "/delete/");

  var _alert$use = _core.alert.use(),
      success = _alert$use.success;

  var afterDelete = function afterDelete() {
    success("".concat(model_name, " deleted!"));
    history.replace('../..');
  };

  var doDelete = function doDelete() {
    return (0, _core.post)(url).then(afterDelete);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.outer()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.mask(),
    onClick: cancel
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.content()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].h2()
  }, "Confirm Delete"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Deleting this object will delete all of the following. Are you sure?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, Object.entries(records).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        items = _ref3[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      key: name,
      className: "mb-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _css["default"].h5()
    }, name), items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: item
      }, item);
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: _css["default"].button.light(),
    onClick: cancel
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
    className: _css["default"].button.danger(),
    onClick: doDelete
  }, "Delete"))));
}

function DeleteObject(_ref4) {
  var model_name = _ref4.model_name,
      id = _ref4.id,
      history = _ref4.history;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pending = _React$useState2[0],
      set = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, pending && /*#__PURE__*/_react["default"].createElement(ConfirmDelete, _extends({
    cancel: function cancel() {
      return set(false);
    }
  }, {
    history: history,
    model_name: model_name,
    id: id
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].button.danger(),
    onClick: function onClick() {
      return set(true);
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-trash mr-2"
  }), "Delete"));
}

function EditUser(_ref5) {
  var match = _ref5.match,
      history = _ref5.history;
  var _match$params = match.params,
      model_name = _match$params.model_name,
      id = _match$params.id;

  var _alert$use2 = _core.alert.use(),
      success = _alert$use2.success;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs["default"], {
    current: "edit ".concat(model_name),
    parts: ['admin', 'user']
  }), /*#__PURE__*/_react["default"].createElement(DeleteObject, {
    model_name: model_name,
    id: id,
    history: history
  })), /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "Admin".concat((0, _utils.pascalCase)(model_name), "Form/").concat(id),
    onSuccess: function onSuccess() {
      return success('Changes saved.');
    }
  }));
}