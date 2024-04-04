export const sidebar = {
    '/server/': [
        { text: '服务器公告', link: '/server/announcement' },
        {
            text: '活动',
            collapsed: false,
            items: [
                { text: '最新活动', link: '/server/events/latest' },
                {
                    text: '历史活动',
                    collapsed: true,
                    items: [
                        { text: '#6 10th OCM', link: '/server/events/historyEvents/6_OCM' },
                        { text: '#5 11st OCM', link: '/server/events/historyEvents/5_OCM' },
                        { text: '#4 18th OCM', link: '/server/events/historyEvents/4_OCM' },
                        { text: '#3 13rd OCM', link: '/server/events/historyEvents/3_OCM' },
                        { text: '远古活动集', link: '/server/events/historyEvents/ancientEvents' },
                    ]
                }
            ]
        }
    ],

    '/game/': [
        { text: '新手入门指南', link: '/game/beginner' },
        { text: '游戏安装教程', link: '/game/install' }
    ]
}