import axios from 'axios';
import global from '../global/global';

axios.defaults.baseURL = global.baseURL;

const http = {
    request ({ url, data = {}, method = 'GET', responseType }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method, responseType);
        });
    },
    _request (url, resolve, reject, data = {}, method = 'GET', responseType) {
        const format = method.toLocaleLowerCase() == 'get' ? 'params' : 'data';
        axios({
            url: url,
            method: method,
            [format]: data,
            header: {
                'content-type': 'application/json'
            },
            responseType
        }).then(res => {
                if (res.status == 200) {
                    resolve(res.data);
                } else if (res.code == -1) {
                    resolve(res);
                }
            }).catch(error => {
                reject(error);
            })
    }
}

export { http };
