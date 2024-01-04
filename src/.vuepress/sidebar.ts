import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/server/": [
    { text: "服务器", icon: "server", link: "/server/" },
    { text: "公告", icon: "bullhorn", link: "/server/announcement" },
  ],
});
