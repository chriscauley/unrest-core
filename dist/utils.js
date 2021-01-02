"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = exports.funct = void 0;

var funct = function funct(f) {
  return typeof f === 'function' ? f() : f;
};

exports.funct = funct;

var assert = function assert(bool, error) {
  if (!funct(bool)) {
    throw funct(error);
  }
};

exports.assert = assert;