import Vue from "vue";
import VueI18n from "vue-i18n";
import OfferDetail from "./OfferDetail.vue";
import "./registerServiceWorker";
import {
  mainconfig,
  i18n
} from "./global";

new Vue({
  el: "#app",
  i18n,
  render: h => h(App)
}).$mount("#app");