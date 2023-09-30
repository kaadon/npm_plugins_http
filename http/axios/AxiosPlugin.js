"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AxiosPlugin = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class AxiosPlugin {
  constructor(token = null) {
    _defineProperty(this, "axiosIns", void 0);
    const axiosIns = _axios.default.create({
      timeout: 5000
    });
    axiosIns.interceptors.request.use(config => {
      // Retrieve token from localStorage
      if (token) config.headers.APIKEY = token;
      // If token is found
      return config;
    });
    axiosIns.interceptors.response.use(response => {
      const {
        code,
        message,
        data
      } = response.data;
      if (code === 200) {
        return data;
      } else {
        return Promise.reject(new Error(message));
      }
    }, error => {
      return Promise.reject(new Error(error.message));
    });
    this.axiosIns = axiosIns;
  }
  get(url, data = {}) {
    try {
      //逻辑代码
      return this.axiosIns({
        url: ApiList.member.login,
        method: 'post',
        data
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
  post(url, data = {}) {
    try {
      //逻辑代码
      return this.axiosIns({
        url: url,
        method: 'post',
        data
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
exports.AxiosPlugin = AxiosPlugin;