import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-echarts',
    'motion-v/nuxt',
  ],
  imports: {
    presets: [{ from: 'dayjs', imports: [{ name: 'default', as: 'dayjs' }] }],
    dirs: ['~/api/**'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt App',
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    // 如果是部署到 Netlify，可以使用 Netlify Edge Functions，以获得最快的响应时间。
    preset: 'netlify_edge',
    routeRules: {
      '/api/**': {
        proxy: 'https://todolist-server-xzcd.onrender.com/api/**',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  echarts: {
    charts: ['LineChart', 'BarChart', 'PieChart'],
    components: [
      'TitleComponent',
      'DatasetComponent',
      'GridComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'LegendComponent',
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    localApiEndpoint: '/_nuxt_icon',
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/img',
    }],
  },
})
