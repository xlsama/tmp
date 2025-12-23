<script setup lang="ts"></script>

<template>
  <div class="space-y-5">
    <h2 class="text-2xl font-bold">Dashboard</h2>
    <section class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
      <UCard v-for="item in 50" :key="item">
        <template #header>
          <h3 class="">Card {{ item }}</h3>
        </template>
        <p class="py-10 text-sm text-gray-500">This is a card body {{ item }}</p>
      </UCard>
    </section>
  </div>
</template>
