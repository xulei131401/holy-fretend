import config from './AdminApiConfig';
import AJAX from '../util/ajax.js'

class Tool {}

let postRequest = (opts) => {
  return function (data) {
    return AJAX.postJson({url: opts.url, params: data.params}, data.successCallback, data.errorCallback);
  };
};

let getRequest = (opts) => {
  return function (data) {
    return AJAX.getJson({url: opts.url, params: data.params}, data.successCallback, data.errorCallback);
  };
};

for (let i = 0; i < config.api.length; i++) {
  if (config.api[i].method === 'post') {
    Tool.prototype[config.api[i].name] = postRequest(config.api[i]);
  } else if (config.api[i].method === 'get') {
    Tool.prototype[config.api[i].name] = getRequest(config.api[i]);
  }
}

const tool = new Tool();

export default tool;