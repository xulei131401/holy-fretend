import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Hello from "../components/HelloWorld";
import Test from "../components/Test";

Vue.use(VueRouter);

const routes = [
    {
        path:"/hello/:id",
        name:"hello",
        component: Hello
    },
    {
        path:"/test/:id",
        name: "test",
        component: Test
    }
]

var router =  new VueRouter({
    routes
})

export default router;