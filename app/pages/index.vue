<script setup lang="ts">
const date = ref();
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-30 gap-5">
    <Button>{{ dayjs(date).format("YYYY-MM-DD") }}</Button>
    <DatePicker v-model="date" />
  </div>
</template>
