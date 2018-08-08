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
    import {apiStudentDetail} from "../../base/api/Tool"

    export default {
        name: 'TestIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            this.testOne();
            // this.testFetch();
        },
        methods:{
            testOne(){
                // let data = {name:"许磊"}
                // this.XL.log('title','hh', data)
                // this.XL.jsonLog('title','hh', data)
                // this.XL.setDocumentTitle('你好啊')
                apiStudentDetail().then(res => {
                    console.log('res', res)
                })
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
            }
        }
    }
</script>

<style scoped>

</style>
