import wepy from 'wepy'
import Config from '../config.js'

function postRequest(url, data) {
  var postRequest = wepy.request;
  data['appid'] = Config.C.Appid;
  return postRequest({
    url: Config.C.Host + url,
    method: 'POST',
    data: data,
    header: {
      "content-type": "application/x-www-form-urlencoded"
    }
  })
}

function getRequest(url, data) {
  var getRequest = wepy.request;
  return getRequest({
    url: Config.C.Host + url,
    method: 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json'
    }
  })
}

module.exports = {
  $post: postRequest,
  $get: getRequest
}