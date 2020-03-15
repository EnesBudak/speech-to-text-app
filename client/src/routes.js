import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import Logout from "./pages/Logout.vue";
import Transcribe from "./pages/TranscribeDetail.vue";
export const routes = [
  {
    path: "/giris",
    name: "giris",
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: "/anasayfa",
    name: "anasayfa",
    component: Dashboard,
    // meta: { requiresAuth: true }
  },
  {
    path: "/cikis",
    name: "cikis",
    component: Logout
  },
  {
    path: "/ceviri",
    name: "ceviri",
    component: Transcribe,
    // meta: { requiresAuth: true }
  },
  {
    path: "*",
    component: Dashboard,
    // meta: { requiresAuth: true }
  }
];
