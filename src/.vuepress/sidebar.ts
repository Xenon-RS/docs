import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/server/": [
    { text: "服务器", icon: "server", link: "/server/" },
    { text: "公告", icon: "bullhorn", link: "/server/announcement" },
    {
      text: "活动",
      icon: "calendar",
      prefix: "events/",
      collapsible: true,
      children: [
        { text: "最新活动", icon: "calendar-days", link: "latest" },
        {
          text: "过往活动",
          icon: "backward",
          prefix: "historyEvents/",
          collapsible: true,
          children: [
            { text: "#4 OCM 18st 福冈区域", link: "4_OCM" },
            { text: "#3 OCM 13st 新环线区域", link: "3_OCM" },
            { text: "远古活动集", link: "ancientEvents" }
          ]
        }
      ]
    }
  ],
});
