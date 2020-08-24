"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SchemaForm;
exports.useSchema = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonschemaForm = _interopRequireDefault(require("@unrest/react-jsonschema-form"));

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _post = _interopRequireDefault(require("./post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useSchema = (0, _reactRestHook["default"])('/api/schema/${form_name}/').use;
exports.useSchema = useSchema;

function SchemaForm(props) {
  var _useSchema = useSchema(props),
      loading = _useSchema.loading,
      makeUrl = _useSchema.makeUrl,
      schema = _useSchema.schema;

  var onSubmit = function onSubmit(formData) {
    return (0, _post["default"])(makeUrl(props), formData);
  };

  if (loading && !schema) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactJsonschemaForm["default"], _extends({}, props, {
    schema: schema,
    onSubmit: onSubmit,
    className: "max-w-3xl mx-auto mt-4"
  }));
}