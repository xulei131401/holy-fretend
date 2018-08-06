<template>
    <div>
        <div class="test">
            你好
        </div>
        <p>
            <router-link to="/hello/1">Go to Foo</router-link>
        </p>
    </div>

</template>

<script>
    import Tool from "../../base/apis/Tool"

    export default {
        name: 'TestIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            // this.testOne();
            // this.testFetch();
            this.testTwo()
        },
        methods:{
            testOne(){
                // let data = {name:"许磊"}
                // this.XL.log('title','hh', data)
                // this.XL.jsonLog('title','hh', data)
                // this.XL.setDocumentTitle('你好啊')
                // this.AJAX.getJson({url:this.ApiMockRouter.student.detail}, (data) => {
                //     this.XL.log("打印ajax值：", data)
                // }, (error) => {
                //     console.log(err)
                // })
            },
            testFetch(){
                // fetch(this.ApiMockRouter.student.detail + "?id=220", {
                //
                // }).then( (response) => {
                //         if(response.ok){
                //             return response.json();
                //         }
                // }).then((data) => {
                //     this.XL.log("打印ajax值：", data)
                // })
            },
            testTwo(){
                Tool.studentDetailApi({
                    params: {status:1},
                    successCallback: (data) => {
                        console.log('ajax data:', data)
                    },
                    errorCallback: (error) => {
                        console.log(error)
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
