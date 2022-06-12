"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _client = require("@apollo/client");

var _context = require("@apollo/client/link/context");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Create the http link
const httpLink = (0, _client.createHttpLink)({
  uri: 'https://api.github.com/graphql'
}); // Generate and set the header with the auth details

const authLink = (0, _context.setContext)((_, _ref) => {
  let {
    headers
  } = _ref;
  // get the authentication token from env variables if it exists
  const token = process.env.REACT_APP_GITHUB_TOKEN; // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: "Bearer ".concat(token)
    })
  };
}); // Generate your client with the authLink and httpLink

const client = new _client.ApolloClient({
  cache: new _client.InMemoryCache(),
  link: authLink.concat(httpLink)
});
exports.client = client;