import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// import "ant-design-vue/dist/antd.less";

//使用babel插件按需加载，所以下面的方法可替代上面注释的3行代码
import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
