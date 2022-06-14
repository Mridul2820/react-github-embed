"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ForkCount", {
  enumerable: true,
  get: function get() {
    return _ForkCount.default;
  }
});
Object.defineProperty(exports, "Repository", {
  enumerable: true,
  get: function get() {
    return _Repository.default;
  }
});
Object.defineProperty(exports, "StarCount", {
  enumerable: true,
  get: function get() {
    return _StarCount.default;
  }
});

var _Repository = _interopRequireDefault(require("./components/Repository"));

var _StarCount = _interopRequireDefault(require("./components/StarCount"));

var _ForkCount = _interopRequireDefault(require("./components/ForkCount"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }