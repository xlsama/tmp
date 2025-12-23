<script setup lang="ts">
import { zh_cn } from '@nuxt/ui/locale'
</script>

<template>
  <UApp
    :locale="zh_cn"
    :toaster="{ position: 'top-right', expand: false, progress: false, duration: 2000 }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
