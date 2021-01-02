"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SchemaForm;
exports.useSchema = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonschemaForm = _interopRequireDefault(require("@unrest/react-jsonschema-form"));

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _utils = require("./utils");

var _post = _interopRequireDefault(require("./post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var hook = (0, _reactRestHook["default"])('/api/schema/${form_name}/');
var useSchema = hook.use;
exports.useSchema = useSchema;

function SchemaForm(_ref) {
  var _ref$prepSchema = _ref.prepSchema,
      prepSchema = _ref$prepSchema === void 0 ? _utils.noop : _ref$prepSchema,
      _ref$onSuccess = _ref.onSuccess,
      _onSuccess = _ref$onSuccess === void 0 ? _utils.noop : _ref$onSuccess,
      props = _objectWithoutProperties(_ref, ["prepSchema", "onSuccess"]);

  var _useSchema = useSchema(props),
      loading = _useSchema.loading,
      makeUrl = _useSchema.makeUrl,
      schema = _useSchema.schema,
      clearData = _useSchema.clearData;

  var onSubmit = function onSubmit(formData) {
    return (0, _post["default"])(makeUrl(props), formData);
  };

  if (loading && !schema) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactJsonschemaForm["default"], _extends({
    schema: prepSchema(schema),
    onSubmit: onSubmit,
    onSuccess: function onSuccess(data) {
      setTimeout(function () {
        return clearData(props);
      });
      return _onSuccess(data);
    },
    className: "max-w-3xl mx-auto mt-4"
  }, props));
}