"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

var _client2 = require("../client");

var _RepositoryCard = _interopRequireDefault(require("../widgets/RepositoryCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Repository = _ref => {
  let {
    username,
    repository,
    theme = 'light',
    showStarCount = true,
    showForkCount = true,
    showLanguage = true,
    showDescription = true,
    showType = true
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
    client: _client2.client
  }, /*#__PURE__*/_react.default.createElement(_RepositoryCard.default, {
    username: username,
    repository: repository,
    theme: theme,
    showStarCount: showStarCount,
    showForkCount: showForkCount,
    showLanguage: showLanguage,
    showDescription: showDescription,
    showType: showType
  }));
};

var _default = Repository;
exports.default = _default;