import axios from "axios";
import global from '../global/global'

axios.defaults.baseURL = global.baseURL;
var http = {
  request({ url, data = {}, method = "GET" }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method);
    });
  },
  _request: function(url, resolve, reject, data = {}, method = "GET") {
    let format = method.toLocaleLowerCase() ==='get'?'params':'data';
    axios({
      url:url,
      method: method,
      [format]: data,
      header: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (res.status == 200) {
        resolve(res.data);
      } else if (res.code == -1) {
        resolve(res);
      }
    }).catch(() => {
      reject();
 
    })
  }
};
export { http };
