import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "./views/404";
// import RenderRouterView from "./components/RenderRouterView";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      // component: RenderRouterView,
      component: { render: h => h("router-view") },
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: 'user' */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: 'register' */ "./views/User/Login")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: 'layout' */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              component: () =>
                import(/* webpackChunkName: 'dashboard' */ "./views/Dashboard/Analysis")
            }
          ]
        },
        {
          path: "/form",
          name: "form",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "form/basic-form",
              name: "basicform",
              component: () =>
                import(/* webpackChunkName: 'form' */ "./views/Forms/BasicForm")
            },
            {
              path: "form/step-form",
              name: "stepform",
              component: () =>
                import(/* webpackChunkName: 'form' */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "form/step-for/info",
                  name: "info",
                  component: () =>
                    import(/* webpackChunkName: 'form' */ "./views/Forms/StepForm/Step1")
                },
                {
                  path: "form/step-for/info",
                  name: "confirm",
                  component: () =>
                    import(/* webpackChunkName: 'form' */ "./views/Forms/StepForm/Step2")
                },
                {
                  path: "form/step-for/info",
                  name: "result",
                  component: () =>
                    import(/* webpackChunkName: 'form' */ "./views/Forms/StepForm/Step3")
                }
              ]
            },
          ]
        },

      ]
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});

router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router