"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curl = curl;
var _axiosPlugin = require("./axiosPlugin");
function curl(param) {
  {
    const {
      token,
      url,
      method,
      data
    } = param;
    try {
      return new _axiosPlugin.AxiosPlugin(token)[method](url, data);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}