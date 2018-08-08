import Vue from 'vue'
import XL from "../../base/util/saba"
import AJAX from "../../base/util/ajax"
import _ from 'lodash'
import moment from 'moment'
import ApiAdminConfig from '../../base/api/AdminApiConfig';

export default {
    install (Vue, options) {
        //工具对象挂载到全局Vue实例
        Vue.prototype.ApiConfig = ApiAdminConfig;
        Vue.prototype.XL = XL
        Vue.prototype.AJAX = AJAX
        Vue.prototype._ = _
        Vue.prototype.moment = moment()
    }
}