<template>
    <div>
    </div>

</template>

<script>
    export default {
        name: 'EventLoopIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            this.testEventLoop();
        },
        methods:{
            testEventLoop(){
                console.log('start')

                const interval = setInterval(() => {
                    console.log('setInterval')
                }, 4)

                setTimeout(() => {
                    console.log('setTimeout 1')
                    Promise.resolve()
                        .then(() => {
                            console.log('promise 3')
                        })
                        .then(() => {
                            console.log('promise 4')
                        })
                        .then(() => {
                            setTimeout(() => {
                                console.log('setTimeout 2')
                                Promise.resolve()
                                    .then(() => {
                                        console.log('promise 5')
                                    })
                                    .then(() => {
                                        console.log('promise 6')
                                    })
                                    .then(() => {
                                        clearInterval(interval)
                                    })
                            }, 0)
                        })
                }, 0)

                Promise.resolve()
                    .then(() => {
                        console.log('promise 1')
                    })
                    .then(() => {
                        console.log('promise 2')
                    })
            }
        }
    }
</script>