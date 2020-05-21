"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UnrestTabs;

var _react = _interopRequireDefault(require("react"));

var _reactTabs = require("react-tabs");

require("react-tabs/style/react-tabs.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function UnrestTabs(_ref) {
  var tabs = _ref.tabs;
  var titles = Object.keys(tabs);
  var contents = Object.values(tabs);
  return /*#__PURE__*/_react["default"].createElement(_reactTabs.Tabs, null, /*#__PURE__*/_react["default"].createElement(_reactTabs.TabList, null, titles.map(function (title, i) {
    return /*#__PURE__*/_react["default"].createElement(_reactTabs.Tab, {
      key: i
    }, title);
  })), contents.map(function (content, i) {
    return /*#__PURE__*/_react["default"].createElement(_reactTabs.TabPanel, {
      key: i
    }, content);
  }));
}