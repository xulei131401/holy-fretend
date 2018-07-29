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
            this.test2();
        },
        methods:{
            test1(){
                let data = {name:"许磊"}
                this.XL.log('title','hh', data)
                // this.XL.jsonLog('title','hh', data)
                // this.XL.setDocumentTitle('你好啊')
                // this.AJAX.getJson({url:'/wechatmp/classes/v1.1.4/list'}, (data) => {
                //     this.XL.log("打印ajax值：", data)
                // }, (error) => {
                //     console.log(err)
                // })

                // console.log(this.moment.format())



            },
            test2(){

            }
        }
    }
</script>

<style scoped>

</style>
