"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var _default = function () {
  var start = new Date().valueOf();
  var last = start;

  var t = function t(s) {
    var now = new Date().valueOf();
    last = now;
  };

  Object.assign(t, {
    reset: function reset() {
      start = (_readOnlyError("start"), new Date().valueOf());
    }
  });
}();

exports["default"] = _default;