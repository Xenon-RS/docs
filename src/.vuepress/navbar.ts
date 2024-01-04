import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "服务器",
    icon: "server",
    link: "/server/",
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/about/",
  }
]);
