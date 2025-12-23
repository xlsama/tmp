import tailwindcss from '@tailwindcss/vite'

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
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt App',
    },
  },
  css: ['~/assets/css/main.css'],
  ui: {
    experimental: {
      componentDetection: true,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: '',
    },
  },
  compatibilityDate: '2025-07-15',
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
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://stg.example.com/api',
        changeOrigin: true,
      },
    },
  },
  fonts: {
    families: [{ name: 'Inter', weights: [400, 500] }],
  },
  icon: {
    localApiEndpoint: '/_nuxt_icon',
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/img',
      },
    ],
  },
  $development: {
    runtimeConfig: {
      public: {
        apiBaseUrl: '',
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        apiBaseUrl: 'https://example.com',
      },
    },
  },
})
