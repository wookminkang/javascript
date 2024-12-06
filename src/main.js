import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
import router from "@/router"; // 라우터 가져오기

const app = createApp(App); // 앱 인스턴스 생성
app.use(router); // 라우터 등록
app.mount("#app"); // 앱 마운트
