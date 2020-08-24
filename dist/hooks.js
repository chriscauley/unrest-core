"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useAutoScroll = exports.useSelect = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// designed to work like <select> element, this triggers open=false when any non-ref'd element is clicked
var useSelect = function useSelect() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var toggleRef = _react["default"].useRef();

  var childRef = _react["default"].useRef();

  var toggle = function toggle() {
    return setOpen(!open);
  };

  _react["default"].useEffect(function () {
    var close = function close(event) {
      if (open) {
        var refs = [toggleRef.current, childRef.current];

        if (!refs.find(function (element) {
          return element.contains(event.target);
        })) {
          setOpen(false);
        }
      }
    };

    document.addEventListener('click', close);
    return function () {
      document.removeEventListener('click', close);
    };
  });

  return {
    open: open,
    setOpen: setOpen,
    toggle: toggle,
    toggleRef: toggleRef,
    childRef: childRef
  };
};

exports.useSelect = useSelect;

var useAutoScroll = function useAutoScroll() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$behavior = _ref.behavior,
      behavior = _ref$behavior === void 0 ? 'smooth' : _ref$behavior,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? 'end' : _ref$block;

  var ref = _react["default"].useRef();

  var _React$useState3 = _react["default"].useState({
    enabled: true,
    first: false
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      _React$useState4$ = _React$useState4[0],
      enabled = _React$useState4$.enabled,
      first = _React$useState4$.first,
      setState = _React$useState4[1];

  var e = ref.current;

  var scroll = function scroll() {
    if (!first) {
      e.scrollIntoView({
        block: block
      });
    } else {
      e.scrollIntoView({
        behavior: behavior,
        block: block
      });
    }
  };

  e && enabled && setTimeout(scroll, 0);

  var onScroll = function onScroll(_ref2) {
    var target = _ref2.target;
    var scrollHeight = target.scrollHeight,
        scrollTop = target.scrollTop,
        clientHeight = target.clientHeight;
    var new_enabled = scrollHeight === scrollTop + clientHeight;

    if (!first || new_enabled !== enabled) {
      setState({
        enabled: new_enabled,
        first: true
      });
    }
  };

  return {
    enabled: enabled,
    ref: ref,
    onScroll: onScroll
  };
};

exports.useAutoScroll = useAutoScroll;
var _default = {
  useAutoScroll: useAutoScroll,
  useSelect: useSelect
};
exports["default"] = _default;