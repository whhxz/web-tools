import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/week",
        code: "week",
        name: "周",
        component: () => import("@/view/week/index.vue")
    },
]

export default createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
)