<script setup lang="ts">
const { userInfo } = useUserStore()
</script>

<template>
  <header
    class="
      flex shrink-0 items-center justify-between gap-4 border-b border-default
      px-10 py-4
    "
  >
    <nav class="flex space-x-3">
      <UButton variant="link">
        <NuxtLink to="/">Home</NuxtLink>
      </UButton>
      <UButton variant="link">
        <NuxtLink to="/login">Login</NuxtLink>
      </UButton>
    </nav>

    <div class="flex items-center gap-3">
      <UBadge
        icon="i-custom-wechat"
        :ui="{
          leadingIcon: 'text-[#69BB64]',
        }"
      >
        {{ userInfo.username }}
      </UBadge>
      <UColorModeButton />
    </div>
  </header>
</template>
