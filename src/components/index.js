import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/Login"
import HelloWorld from "@/components/HelloWorld"
import Todo from "@/components/TodoList"
import Dashboard from "@/components/Dashboard"
impoort App from "App"

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/TodoList",
            name: "Todo",
            component: TodoList
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
    ]
})