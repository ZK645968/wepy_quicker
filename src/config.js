var config = {
  Host: "http://",
  Appid: "",                   // 未提供
  AppSecret: ``, // 未提供
  port: 443
}
var httpAPI = {
  Login: `/api/user/login`,         // 登录
}
module.exports = httpAPI
module.exports.C = config
