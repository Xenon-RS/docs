export const nav = [
  { text: '主页', link: '/' },
  {
    text: '服务器',
    items: [
      {
        items: [
          { text: '公告', link: '/server/announcement' },
        ],
      },
      {
        text: '活动',
        items: [
          { text: '最新活动', link: '/server/events/latest' },
          { text: '历史活动', link: '/server/events/historyEvents/6_OCM' }
        ]
      }
    ]
  },
  {
    text: '游戏',
    items: [
      { text: '新手入门指南', link: '/game/beginner' },
      { text: '游戏安装教程', link: '/game/install' },
      { text: '游戏问题修复', link: '/game/fix' }
    ]
  },
  { text: '关于', link: '/about/about' }
];
