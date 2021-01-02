"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertList = AlertList;
exports["default"] = exports.config = void 0;

var _react = _interopRequireDefault(require("react"));

var _css = _interopRequireDefault(require("@unrest/css"));

var _useGlobalHook = _interopRequireDefault(require("use-global-hook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var hook = (0, _useGlobalHook["default"])(_react["default"], {
  items: []
}, actions);

var use = function use() {
  var _hook = hook(),
      _hook2 = _slicedToArray(_hook, 2),
      state = _hook2[0],
      actions = _hook2[1];

  return _objectSpread(_objectSpread({}, state), actions);
};

function AlertList() {
  var _use = use(),
      items = _use.items,
      remove = _use.remove;

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
}

function TestAlert() {
  var _React$useState = _react["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      i = _React$useState2[0],
      setI = _React$useState2[1];

  var types = ['info', 'success', 'error', 'warning'];
  var words = ['what', 'do'];
  var alert = use();

  var onClick = function onClick() {
    var type = types[i % types.length];
    var text = words[i % words.length];
    alert[type](text);
    setI(i + 1);
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, "Click me");
}

var _default = {
  connect: function connect() {
    throw 'Deprecation Error: alert.connect is no longer supported, use alert.use instead.';
  },
  List: AlertList,
  TestAlert: TestAlert,
  config: config,
  useAlert: function useAlert() {
    console.warn('alert.useAlert is depractated, do alert.use() instead');
    return use();
  },
  use: use
};
exports["default"] = _default;