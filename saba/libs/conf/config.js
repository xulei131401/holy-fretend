import Vue from 'vue'

import XL from "../../base/util/saba"
import AJAX from "../../base/util/ajax"
import _ from 'lodash'
import moment from 'moment'
import ApiRouter from '../api/router.js'
import ApiConfig from '../../base/apis/AdminApiConfig';

export default {
    install (Vue, options) {
        //工具对象挂载到全局Vue实例
        Vue.prototype.ApiMockRouter = ApiRouter;
        Vue.prototype.ApiConfig = ApiConfig;
        Vue.prototype.XL = XL
        Vue.prototype.AJAX = AJAX
        Vue.prototype._ = _
        Vue.prototype.moment = moment()
    }
}