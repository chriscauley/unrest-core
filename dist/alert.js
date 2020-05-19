"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.List = exports.connect = exports.config = void 0;

var _react = _interopRequireDefault(require("react"));

var _css = _interopRequireDefault(require("@unrest/css"));

var _useGlobalHook = _interopRequireDefault(require("use-global-hook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  duration: 10000
};
exports.config = config;
_css["default"].snackbar = _css["default"].CSS({
  __default: 'outer',
  outer: 'snackbar',
  item: 'item',
  container: 'container'
});

var _add = function _add(type) {
  return function (store, content) {
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return store.actions.add(_objectSpread({
      content: content,
      type: type
    }, extra));
  };
};

var actions = {
  add: function add(store, item) {
    var items = store.state.items;
    item = _objectSpread({
      id: Math.random(),
      timeout: config.duration
    }, item);
    items.push(item);
    store.setState({
      items: items
    });
    item.timeout && setTimeout(function () {
      return store.actions.remove(item.id);
    }, item.timeout);
  },
  kill: function kill(store, id) {
    // instantly remove an alert. Will be useful when further actions might replace one alert with another
    var items = store.state.items.filter(function (i) {
      return i.id !== id;
    });

    if (items.length !== store.state.items.length) {
      store.setState({
        items: items
      });
    }
  },
  remove: function remove(store, id) {
    var items = store.state.items;
    var item = store.state.items.find(function (item) {
      return item.id === id;
    });

    if (!item) {
      return;
    }

    item.dismissed = new Date().valueOf();
    store.setState({
      items: items
    });
    setTimeout(function () {
      return store.actions._cleanup();
    }, 1000);
  },
  _cleanup: function _cleanup(store) {
    // garbage collecting function to remove items after dismissal
    var now = new Date().valueOf();
    var items = store.state.items.filter(function (i) {
      return !i.dismissed || i.dismissed > now - 500;
    });

    if (items.length !== store.state.items.length) {
      store.setState({
        items: items
      });
    }
  },
  info: _add('info'),
  success: _add('success'),
  error: _add('error'),
  warning: _add('warning')
};
var makeHook = (0, _useGlobalHook["default"])(_react["default"], {
  items: []
}, actions);

var connect = function connect(Component) {
  return function (props) {
    var _makeHook = makeHook(),
        _makeHook2 = _slicedToArray(_makeHook, 2),
        state = _makeHook2[0],
        actions = _makeHook2[1];

    var items = state.items;

    var alert_props = _objectSpread({
      items: items
    }, actions);

    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
      alert: alert_props
    }));
  };
};

exports.connect = connect;
var List = connect(function (props) {
  var _props$alert = props.alert,
      items = _props$alert.items,
      remove = _props$alert.remove;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].snackbar()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].snackbar.container()
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: _css["default"].snackbar.item({
        dismissed: item.dismissed
      })
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _css["default"].alert[item.type]()
    }, item.content, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick() {
        return remove(item.id);
      },
      className: _css["default"].icon('close cursor-pointer')
    })));
  })));
});
exports.List = List;

var TestAlert = function () {
  var types = ['info', 'success', 'error', 'warning'];
  var words = ['what', 'do'];
  var i = 0;
  return connect(function (props) {
    var onClick = function onClick() {
      var type = types[i % types.length];
      var text = words[i % words.length];
      alert[type](text);
      i++;
    };

    var alert = props.alert;
    return /*#__PURE__*/_react["default"].createElement("button", {
      onClick: onClick
    }, "Click me");
  });
}();

var _default = {
  connect: connect,
  List: List,
  TestAlert: TestAlert,
  config: config
};
exports["default"] = _default;