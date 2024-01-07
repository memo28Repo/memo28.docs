/*
 * @Author: @memo28.repo
 * @Date: 2023-12-15 23:39:33
 * @LastEditTime: 2023-12-16 00:03:22
 * @Description:
 * @FilePath: /memo28.docs/docs/.vitepress/config.mts
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "memo28",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '@memo28/service',
        items: [
          { text: '快速开始', link: '/service/guide' },
          { text: '启发', link: '/service/inspired' },
          { text: '插件化拦截器', link: '/service/interceptor' },
          { text: '插件化触发器', link: '/service/trigger' },
          { text: '插件列表', link: '/service/plugins' },
        ]
      },
      {
        text: '@memo28/viteBuild',
        items: [
          { text: '快速开始', link: '/viteBuild/guide' },
          { text: '插件列表', link: '/service/plugins' },
        ]
      },
      {
        text: '@memo28/vue',
        items: [
          { text: '快速开始', link: '/vue/guide' },
          { text: 'API列表', link: '/vue/api' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
