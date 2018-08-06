<template>
    <div>
        <div id="content" style="height:150px;line-height:150px;text-align:center; color: #fff;background-color:#ccc;font-size:80px;"></div>
    </div>

</template>

<script>
    export default {
        name: 'DebounceIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            this.testDebounce();
        },
        methods:{
            testDebounce(){
                //1.第一版
                var num = 1;
                var content = document.getElementById('content');

                let count = function () {
                    content.innerHTML = num++;
                }

                // content.onmousemove = count;
                //2.延时执行版本 第二版

                // function debounce(func, wait) {
                //     var timeout;
                //
                //     return function () {
                //         var context = this;
                //         var args = arguments;
                //         if (timeout) clearTimeout(timeout);
                //
                //         timeout = setTimeout(function(){
                //             func.apply(context, args)
                //         }, wait);
                //     }
                // }

                //3.立即执行版本 第二版
                // function debounce(func, wait) {
                //     var timeout;
                //
                //     return function () {
                //         var context = this;
                //         var args = arguments;
                //
                //         if (timeout) clearTimeout(timeout);
                //
                //         var callNow = !timeout;
                //         timeout = setTimeout(function(){
                //             timeout = null;
                //         }, wait)
                //
                //         if (callNow) func.apply(context, args)
                //     }
                // }

                //4.双剑合璧版本

                /**
                 * @desc 函数防抖
                 * @param func 函数
                 * @param wait 延迟执行毫秒数
                 * @param immediate true 表立即执行，false 表非立即执行
                 */
                // function debounce(func,wait,immediate) {
                //     var timeout;
                //
                //     return function () {
                //         var context = this;
                //         var args = arguments;
                //
                //         if (timeout) clearTimeout(timeout);
                //         if (immediate) {
                //             var callNow = !timeout;
                //             timeout = setTimeout(function(){
                //                 timeout = null;
                //             }, wait)
                //             if (callNow) func.apply(context, args)
                //         }
                //         else {
                //             timeout = setTimeout(function(){
                //                 func.apply(context, args)
                //             }, wait);
                //         }
                //     }
                // }

                // content.onmousemove = debounce(count, 1000, true);

                //4.节流,时间戳版本
                // function throttle(func, wait) {
                //     var previous = 0;
                //
                //     return function() {
                //         var now = Date.now();
                //         var context = this;
                //         var args = arguments;
                //         if ((now - previous) > wait) {
                //             func.apply(context, args);
                //             previous = now;
                //         }
                //     }
                // }

                // function throttle(func, wait) {
                //     var timeout;
                //
                //     return function() {
                //         var context = this;
                //         var args = arguments;
                //         if (!timeout) {
                //             timeout = setTimeout(function(){
                //                 timeout = null;
                //                 func.apply(context, args)
                //             }, wait)
                //         }
                //
                //     }
                // }

                // function throttle(func, wait ,type) {
                //     if(type===1){
                //         var previous = 0;
                //     }else if(type===2){
                //         var timeout;
                //     }
                //
                //     return function() {
                //         var context = this;
                //         var args = arguments;
                //         if(type===1){
                //             var now = Date.now();
                //
                //             if (now - previous > wait) {
                //                 func.apply(context, args);
                //                 previous = now;
                //             }
                //         }else if(type===2){
                //             if (!timeout) {
                //                 timeout = setTimeout(function(){
                //                     timeout = null;
                //                     func.apply(context, args)
                //                 }, wait)
                //             }
                //         }
                //
                //     }
                // }


                // content.onmousemove = throttle(count,1000,1);


                // content.onmousemove = this._.debounce(count, 500, {
                //     'leading': false,
                //     'trailing': true
                // });

            }
        }
    }
</script>