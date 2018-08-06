//import语句必须放在开头
import ApiRouter from "../api/router.js"
// 引入mockjs
const Mock = require('mockjs');

// 数据模板定义规范（Data Template Definition，DTD）
// 数据占位符定义规范（Data Placeholder Definition，DPD）
// var a = Mock.mock({
//     'number1|1-100.1-10': 1,
//     'number2|123.1-10': 1,
//     'number3|123.3': 1,
//     'number4|123.10': 1.123
// });
// console.log(a);
//
// var b = Mock.mock({
// 	'price|+1' : 5,
// 	'name|1' : true
// });
// console.log(b);
//
// var c = Mock.mock({
//        first: '@FIRST',
//        middle: '@FIRST',
//        last: '@LAST',
//        full: '@first @middle @last'
// })
//
// console.log(c);
//
// var Random = Mock.Random
// console.log(Random.ip())
//
// console.log(Mock.mock('@email'))
// console.log(Mock.mock( { email: '@email' } ))
//
// /*
//     Mock.Random 提供的完整方法（占位符）如下：
//
//     Type	Method
//     Basic	boolean, natural, integer, float, character, string, range, date, time, datetime, now
//     Image	image, dataImage
//     Color	color
//     Text	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
//     Name	first, last, name, cfirst, clast, cname
//     Web	url, domain, email, ip, tld
//     Address	area, region
//     Helper	capitalize, upper, lower, pick, shuffle
//     Miscellaneous	guid, id
// */
// Random.extend({
//     constellation: function(date) {
//         var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
//         return this.pick(constellations)
//     }
// })
// console.log(Random.constellation())
// console.log(Mock.mock('@CONSTELLATION'))
// console.log(Mock.mock({
//     constellation: '@CONSTELLATION'
// }))