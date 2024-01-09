import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "vuepress-plugin-comment2";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import navber from "./navbar";
import sidebar from "./sidebar";

export default defineUserConfig({
  base: "/",

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
    }),

    docsearchPlugin({
      appId: "5OGLWFJIJU",
      apiKey: "2fd19ed216eba033fb406e85229d6bc3",
      indexName: "xenon-rs",

      // 翻译
      translations: {
        button: {
          buttonText: "搜索Xenon Docs",
          buttonAriaLabel: '搜索Xenon Docs',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除记录',
            resetButtonAriaLabel: '清除记录',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '最近的搜索结果',
            noRecentSearchesText: '无最近的搜索结果',
            saveRecentSearchButtonTitle: '保存该结果',
            removeRecentSearchButtonTitle: '从记录中删除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中删除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: 'BYD你是不是没网',
          },
          footer: {
            selectText: '选定',
            selectKeyAriaLabel: 'Enter',
            navigateText: '上下选择',
            navigateUpKeyAriaLabel: 'Arrow up',
            navigateDownKeyAriaLabel: 'Arrow down',
            closeText: '关闭',
            closeKeyAriaLabel: 'Escape key',
            searchByText: '搜索服务提供商：',
          },
          noResultsScreen: {
            noResultsText: '没有如下的搜索结果：',
            suggestedQueryText: '尝试搜索',
            reportMissingResultsText: '你相信这个查询应该返回结果？',
            reportMissingResultsLinkText: '让我们揭晓',
          }
        }
      }
    })
  ]
});
