<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const { $api } = useNuxtApp()

const { data, pending } = await useAsyncData(() => $api('/api/todos'))

watchEffect(() => {
  console.log('🚀 ~ ', data.value, pending.value)
})

const calendarValue = shallowRef(new CalendarDate(2025, 8, 1))

const option = ref<ECOption>({
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
})
</script>

<template>
  <UTabs
    :items="[
      { label: 'Chart', icon: 'i-lucide-chart-column-increasing', slot: 'chart' },
      { label: 'Table', icon: 'i-lucide-table', slot: 'table' },
      { label: 'Calendar', icon: 'i-lucide-calendar', slot: 'calendar' },
    ]"
    variant="link"
    class="h-full"
    :ui="{ content: 'flex-1 min-h-0' }"
  >
    <template #chart>
      <VChart :option="option" autoresize />
    </template>

    <template #table>
      <UTable
        :data="
          Array(100)
            .fill(0)
            .map((_, i) => ({
              id: i + 1,
              date: dayjs().subtract(i, 'day').format('YYYY-MM-DDTHH:mm:ss'),
              status: i % 2 === 0 ? 'paid' : 'failed',
              email: `user${i}@example.com`,
              amount: Math.floor(Math.random() * 1000),
            }))
        "
      />
    </template>

    <template #calendar>
      <UCalendar v-model="calendarValue" />
    </template>
  </UTabs>
</template>
