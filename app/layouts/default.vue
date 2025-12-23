<template>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <AppHeader />
    <div class="grid grid-cols-[260px_1fr] overflow-hidden">
      <AppSidebar />
      <main class="overflow-y-auto p-4">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>
