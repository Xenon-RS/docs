import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Xenon Docs",
  description: "Xenon Racing Server",
  themeConfig: {

    // 导航栏
    nav: nav,

    // 侧边栏
    sidebar: sidebar,

    // 页脚
    footer: {
      message: 'Released Under the <a href=\"https://mit-license.org/\"style=\"color: #de4f7a; text-decoration: underline;\" target=blank>MIT License</a>.',
      copyright: 'Copyright © 2023-Present <a href=\"https://github.com/kKsk03\" style=\"color: #de4f7a; text-decoration: underline;\" target=blank>kKsk</a>'
    },

    // 底部 编辑此文档
    editLink: {
      text: '在 GitHub 上编辑此页面',
      pattern: 'https://github.com/Xenon-RS/docs/blob/main/docs/:path'
    },

    // 汉化
    lastUpdatedText: '最后一次更新于:',
    outlineTitle: '在此页面上的内容',
    docFooter: {
      next: '下一篇',
      prev: '上一篇'
    },
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '浅色/深色模式',
    sidebarMenuLabel: '菜单',

    // 社交链接（右上角）
    socialLinks: [
      { icon: "github", link: "https://github.com/Xenon-RS" }
    ],
  }
})
