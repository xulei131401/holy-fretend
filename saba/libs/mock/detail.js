//import语句必须放在开头
import ApiRouter from "../api/router.js"
// 引入mockjs
const Mock = require('mockjs');

Mock.mock(ApiRouter.student.detail, (req, res) => {
    return {
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