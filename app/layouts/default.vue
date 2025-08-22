<template>
  <UDashboardGroup class="text-sm">
    <AppSidebar />
    <div class="flex flex-1 flex-col">
      <AppHeader />
      <section
        class="m-4 min-h-0 flex-1 overflow-y-auto rounded-lg bg-elevated p-3"
      >
        <slot />
      </section>
    </div>
  </UDashboardGroup>
</template>
