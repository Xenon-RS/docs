import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "vuepress-plugin-comment2";
import navber from "./navbar";
import sidebar from "./sidebar";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "Xenon Docs",
  description: "Xenon ocs",

  theme: hopeTheme({
    // 导航栏与侧边栏
    navbar: navber,
    sidebar: sidebar,

    // 图标
    iconAssets: "fontawesome",

    // 全屏按钮
    fullscreen: true,
    
    // GitHub仓库链接
    repo: "Xenon-RS/docs",

    editLink: true,

    displayFooter: true,
    footer: "使用 <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a> 主题 | MIT 协议",
    copyright: "版权所有 &copy 2023 ~ Present <a href=\"https://github.com/kKsk03\" target=\"_blank\">kKsk</a>"
  }),

  plugins: [

    // 评论插件
    commentPlugin({
      provider: "Giscus",
      comment: true,
      repo: "Xenon-RS/docs-discuss",
      repoId: "R_kgDOLAywFg",
      category: "General",
      categoryId: "DIC_kwDOLAywFs4CcMeT"
    })
  ]
});
