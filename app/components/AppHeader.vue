<script setup lang="ts">
const { userInfo } = useUserStore()
</script>

<template>
  <header class="flex h-15 items-center justify-center gap-4">
    <nav class="flex space-x-2">
      <UButton
        icon="i-custom-nuxt"
        class="animate-in delay-200 duration-300 fade-in"
      >
        <NuxtLink to="/">Home</NuxtLink>
      </UButton>
      <UButton>
        <NuxtLink to="/login">Login</NuxtLink>
      </UButton>
    </nav>

    <UBadge>{{ userInfo.username }}</UBadge>

    <ColorModeButton />
  </header>
</template>
