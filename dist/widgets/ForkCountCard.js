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

var _StarForkLoading = _interopRequireDefault(require("../loading/StarForkLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ForkCountCard = _ref => {
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
  if (loading) return /*#__PURE__*/_react.default.createElement(_StarForkLoading.default, null);
  if (error) return /*#__PURE__*/_react.default.createElement(_StarForkLoading.default, null);
  return /*#__PURE__*/_react.default.createElement(_StarForkCard.default, {
    data: data,
    theme: theme,
    iconText: iconText,
    formatNumber: formatNumber,
    slug: "/network/members",
    numbers: data.repository.forks.totalCount
  });
};

ForkCountCard.propTypes = {
  username: _propTypes.default.string.isRequired,
  repository: _propTypes.default.string.isRequired,
  theme: _propTypes.default.string,
  iconText: _propTypes.default.string,
  formatNumber: _propTypes.default.bool
};
var _default = ForkCountCard;
exports.default = _default;