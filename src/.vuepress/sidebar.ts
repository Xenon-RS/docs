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
  "/game/": [
    { text: "游戏", icon: "gamepad", link: "/game/" },
    { text: "游戏安装教程", icon: "download", link: "/game/install" },
    {
      text: "游戏问题修复",
      icon: "square-xmark",
      prefix: "problem/",
      collapsible: true,
      children: [
        { text: "游戏内问题", link: "in_game_problem" }
      ]
    }
  ],
  "/wiki/": [
    { text: "Wiki", icon: "database", link: "/wiki/" },
    { text: "比赛用仪表", icon: "tape", link: "meters" },
    { text: "等级", icon: "layer-group", link: "levels" },
    {
      text: "车辆",
      icon: "car",
      prefix: "cars/",
      collapsible: true,
      children: [
        { text: "Audi", link: "audi" },
        { text: "BMW", link: "bmw" },
        { text: "Chevrolet", link: "chevrolet" },
        { text: "Dodge", link: "dodge" },
        { text: "Honda", link: "honda" },
        { text: "Lanborghini", link: "lanborghini" },
        { text: "Mazda", link: "mazda" },
        { text: "Mercedes-Benz", link: "mercedes" },
        { text: "Misubitsu", link: "misubitsu" },
        { text: "Nissan", link: "nissan" },
        { text: "Prosche", link: "prosche" },
        { text: "Subaru", link: "subaru" },
        { text: "Toyota", link: "toyota" }
      ]
    }
  ],
  "/about/": [
    { text: "关于Xenon", link: "/about/" },
    { text: "声明", link: "/about/statement" },
    { text: "成员", link: "/about/members" },
    { text: "友情", link: "friendship" }
  ]
});
