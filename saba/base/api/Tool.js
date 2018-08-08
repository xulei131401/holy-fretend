import ApiAdminConfig from './AdminApiConfig';
import AJAX from '../util/ajax.js'

export const apiStudentDetail = params => AJAX.getJson(ApiAdminConfig.studentDetail.url, params);