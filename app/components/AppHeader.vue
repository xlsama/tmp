<script setup lang="ts">
const { userInfo } = useUserStore()
</script>

<template>
  <header class="flex gap-4 justify-center items-center h-15">
    <nav class="space-x-2">
      <UButton>
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
