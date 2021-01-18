"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = exports.assert = exports.resolveCallable = exports.funct = exports.warnOnce = void 0;
var WARNED = {};

var warnOnce = function warnOnce(s) {
  if (!WARNED[s]) {
    console.warn(s);
    WARNED[s] = true;
  }
};

exports.warnOnce = warnOnce;

var funct = function funct(f) {
  warnOnce('Depracation Warning: funct should be resolveCallable');
  return resolveCallable(f);
};

exports.funct = funct;

var resolveCallable = function resolveCallable(f) {
  return typeof f === 'function' ? f() : f;
};

exports.resolveCallable = resolveCallable;

var assert = function assert(bool, error) {
  if (!funct(bool)) {
    throw funct(error);
  }
};

exports.assert = assert;

var noop = function noop(a) {
  return a;
};

exports.noop = noop;