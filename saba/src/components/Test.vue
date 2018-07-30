<template>
  <div class="test">
    你好
  </div>
</template>

<script>
    export default {
        name: 'TestIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            // this.test1();
            this.testFetch();
        },
        methods:{
            test1(){
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
                fetch(this.ApiMockRouter.student.detail + "?id=220", {

                }).then( (response) => {
                        if(response.ok){
                            return response.json();
                        }
                }).then((data) => {
                    this.XL.log("打印ajax值：", data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
