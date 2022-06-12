"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_REPOSITORY = void 0;

var _client = require("@apollo/client");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const GET_REPOSITORY = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query searchUser($username: String!, $repository: String!) {\n    repository(name: $repository, owner: $username) {\n      isPrivate\n      isFork\n      isTemplate\n      isArchived\n      url\n      forks {\n        totalCount\n      }\n      stargazers {\n        totalCount\n      }\n      name\n      description\n      languages(orderBy: { field: SIZE, direction: DESC }, first: 1) {\n        nodes {\n          color\n          id\n          name\n        }\n      }\n    }\n  }\n"])));
exports.GET_REPOSITORY = GET_REPOSITORY;