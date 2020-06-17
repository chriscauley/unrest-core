"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postForm = exports["default"] = exports.afterFetch = exports.handleError = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var handleError = function handleError(error) {
  // Analyzes many possible exeptions and return { error: "Something the user can read" }
  if (typeof error === 'string') {
    return {
      error: error
    };
  }

  if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
    return {
      error: 'Unable to connect to server. Please check your internet connection and try again.'
    };
  }

  return {
    error: error.message
  };
};

exports.handleError = handleError;

var afterFetch = function afterFetch(response) {
  var contentType = response.headers.get('content-type');

  if (!contentType || !contentType.includes('application/json')) {
    // all responses from the server should be an ajax
    // this is triggered when the server has hit a 500
    // server can also send back { error } to display a more specific error
    return {
      error: _config["default"].unknown_error
    };
  }

  return response.json()["catch"](handleError);
};

exports.afterFetch = afterFetch;

var _default = function _default(url, data) {
  return fetch(_config["default"].base_url + url, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: _config["default"].getHeaders()
  }).then(afterFetch, handleError);
};

exports["default"] = _default;

var postForm = function postForm(url, data) {
  // like the default post, but using form data and multipart content type
  var headers = _config["default"].getHeaders();

  var formData = new FormData();
  Object.entries(data).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    formData.append(key, value);
  });
  delete headers['content-type'];
  return fetch(_config["default"].base_url + url, {
    body: formData,
    method: 'POST',
    headers: headers
  }).then(afterFetch, handleError);
};

exports.postForm = postForm;