"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _Query = require("../graphql/Query");

var _client = require("@apollo/client");

var _RepoIcon = _interopRequireDefault(require("../svgs/RepoIcon"));

var _StarIcon = _interopRequireDefault(require("../svgs/StarIcon"));

var _ForkIcon = _interopRequireDefault(require("../svgs/ForkIcon"));

var _formatNumber = require("../helper/formatNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Repository = _ref => {
  let {
    username,
    repository,
    theme = "light",
    showStarCount = true,
    showForkCount = true,
    showLanguage = true,
    showDescription = true,
    showType = true
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
    className: "bg-gray-200 w-80 h-44 rounded-md"
  });
  if (error) return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-200 w-80 h-44 rounded-md"
  });

  const getType = () => {
    if (!data.repository.isPrivate && data.repository.isTemplate) {
      return "Public template";
    } else if (data.repository.isPrivate && data.repository.isTemplate) {
      return "Private template";
    } else if (data.repository.isPrivate) {
      return "Private";
    } else if (!data.repository.isPrivate) {
      return "Public";
    } else if (data.repository.isFork) {
      return "Forked";
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: theme === "dark" ? "dark" : "light"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between flex-col rounded-md p-4 w-80 h-44 border-[1px] border-border-default dark:border-border-dark bg-canvas-default dark:bg-canvas-dark"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/_react.default.createElement(_RepoIcon.default, {
    theme: theme
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: data.repository.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-accent-default dark:text-accent-dark hover:underline text-sm font-semibold",
    title: data.repository.url
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "leading-5"
  }, data.repository.name)), /*#__PURE__*/_react.default.createElement("span", {
    className: "px-2 py-0.5 border-[1px] border-border-default dark:border-border-dark text-xs text-muted-default dark:text-muted-dark rounded-full font-medium"
  }, getType())), showDescription && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs text-muted-default dark:text-muted-dark mt-2 leading-5"
  }, data.repository.description)), /*#__PURE__*/_react.default.createElement("p", {
    className: "flex items-center gap-4 mt-2"
  }, showLanguage && data.repository.languages.nodes.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "h-3 w-3 rounded-full",
    style: {
      background: data.repository.languages.nodes[0].color
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-muted-default dark:text-muted-dark leading-5 -ml-3"
  }, data.repository.languages.nodes[0].name)), showStarCount && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(data.repository.url, "/stargazers"),
    className: "flex items-center gap-1",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_StarIcon.default, {
    theme: theme
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-muted-default dark:text-muted-dark leading-5"
  }, (0, _formatNumber.numberFormatter)(data.repository.stargazers.totalCount, 1))), showForkCount && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(data.repository.url, "/network/members"),
    className: "flex items-center gap-1",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_ForkIcon.default, {
    theme: theme
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-muted-default dark:text-muted-dark leading-5"
  }, (0, _formatNumber.numberFormatter)(data.repository.forks.totalCount, 1))))));
};

var _default = Repository;
exports.default = _default;