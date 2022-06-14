"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _io = require("react-icons/io");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GithubIcon = _interopRequireDefault(require("../svgs/GithubIcon"));

var _formatNumber = require("../helper/formatNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StarForkCard = _ref => {
  let {
    data,
    theme,
    iconText,
    formatNumber,
    slug
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: theme === 'dark' ? 'dark' : 'light'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: data.repository.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "star-fork bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800  duration-300",
    title: data.repository.name
  }, /*#__PURE__*/_react.default.createElement(_GithubIcon.default, null), iconText), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(data.repository.url).concat(slug),
    target: "_blank",
    rel: "noopener noreferrer",
    className: "relative star-fork bg-neutral-50 hover:bg-neutral-100 dark:hover:bg-slate-800 duration-300",
    title: "".concat(data.repository.name, " stargazers")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "absolute top-1/2 -translate-y-1/2 -left-3 z-10"
  }, /*#__PURE__*/_react.default.createElement(_io.IoMdArrowDropleft, {
    size: 17,
    color: theme === 'dark' ? '#0f172a' : '#e2e8f0'
  })), formatNumber ? (0, _formatNumber.numberFormatter)(data.repository.stargazers.totalCount, 1) : data.repository.stargazers.totalCount)));
};

StarForkCard.propTypes = {
  data: _propTypes.default.object.isRequired,
  theme: _propTypes.default.string,
  slug: _propTypes.default.string,
  iconText: _propTypes.default.string,
  formatNumber: _propTypes.default.bool
};
var _default = StarForkCard;
exports.default = _default;