"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function () {
  var start = new Date().valueOf();
  var last = start;

  var t = function t(s) {
    var now = new Date().valueOf();
    console.log(s, now - last); // eslint-disable-line

    last = now;
  };

  Object.assign(t, {
    reset: function reset() {
      start = new Date().valueOf();
    }
  });
}();

exports["default"] = _default;