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
    lastUpdated: {
      text: '最后一次更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
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

    // 搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '5OGLWFJIJU',
        apiKey: '2fd19ed216eba033fb406e85229d6bc3',
        indexName: 'xenon-rs',
        placeholder: '搜索Xenon Docs',
        translations: {
          button: {
            buttonText: '搜索Xenon Docs',
            buttonAriaLabel: '搜索Xenon Docs'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    }
  }
})
