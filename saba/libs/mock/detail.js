//import语句必须放在开头
import ApiAdminConfig from "../../base/api/AdminApiConfig.js"
// 引入mockjs
const Mock = require('mockjs');

let isMock = process.env.NODE_ENV === 'development'

//mock模式下
if (isMock) {
    Mock.mock(ApiAdminConfig.studentDetail.url, (req, res) => {
        return {
            errcode: 200,
            errmsg: "success",
            errtime: "1533629697",
            data: [
                {
                    "id" : 1,
                    "username": "aaa",
                    "password": "aaa"
                },
                {
                    "id" : 2,
                    "username": "bbb",
                    "password": "bbb"
                },
                {
                    "id": 3,
                    "username": "ccc",
                    "password": "ccc"
                }
            ]
        }
    })
}