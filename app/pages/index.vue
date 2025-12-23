<script setup lang="ts"></script>

<template>
  <div class="space-y-5">
    <h2 class="text-2xl font-bold">Dashboard</h2>
    <section class="grid gap-4">
      <UCard v-for="item in 50" :key="item"> {{ item }} </UCard>
    </section>
  </div>
</template>
