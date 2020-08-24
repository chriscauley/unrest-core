"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undoCamelCase = exports.titleCase = exports.pascalCase = void 0;

var pascalCase = function pascalCase(s) {
  return s.replace(/(\w)(\w*)/g, function (_, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

exports.pascalCase = pascalCase;

var titleCase = function titleCase(s) {
  return s.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

exports.titleCase = titleCase;

var undoCamelCase = function undoCamelCase(s) {
  return s.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (c) {
    return c.toUpperCase();
  });
};

exports.undoCamelCase = undoCamelCase;