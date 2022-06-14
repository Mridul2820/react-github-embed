"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _client = require("@apollo/client");

var _Query = require("../graphql/Query");

var _StarForkCard = _interopRequireDefault(require("./StarForkCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StarCountCard = _ref => {
  let {
    username,
    repository,
    theme,
    iconText,
    formatNumber
  } = _ref;
  const {
    data,
    loading,
    error
  } = (0, _client.useQuery)(_Query.GET_REPOSITORY, {
    variables: {
      username,
      repository
    }
  });
  if (loading) return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-200 w-32 h-[26px] rounded-sm3"
  });
  if (error) return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-200 w-32 h-[26px] rounded-sm3"
  });
  return /*#__PURE__*/_react.default.createElement(_StarForkCard.default, {
    data: data,
    theme: theme,
    iconText: iconText,
    formatNumber: formatNumber,
    slug: "/stargazers"
  });
};

StarCountCard.propTypes = {
  username: _propTypes.default.string.isRequired,
  repository: _propTypes.default.string.isRequired,
  theme: _propTypes.default.string,
  iconText: _propTypes.default.string,
  formatNumber: _propTypes.default.bool
};
var _default = StarCountCard;
exports.default = _default;