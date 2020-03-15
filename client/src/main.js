import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/tr-TR";
import VueQriously from "vue-qriously";
import VueQrcodeReader from "vue-qrcode-reader";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "./store/store";
import axios from "axios";

Vue.use(VueQriously);
Vue.use(VueQrcodeReader);
Vue.use(ElementUI, { locale });
Vue.use(VueRouter);
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:4000/api/";

const router = new VueRouter({
  routes,
  mode: "history"
});
// duplicate some route fix
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.getUserToken) {
      next({
        path: "/giris"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
