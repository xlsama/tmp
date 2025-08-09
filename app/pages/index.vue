<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const calendarValue = shallowRef(new CalendarDate(2025, 8, 1))

const option = ref<ECOption>({
  dataset: {
    dimensions: ['Product', '2015', '2016', '2017'],
    source: [
      {
        Product: 'Matcha Latte',
        2015: 54,
        2016: 42,
        2017: 23,
      },
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }],
})
</script>

<template>
  <UContainer class="mt-5">
    <UTabs
      :items="[
        { label: 'Table', icon: 'i-lucide-table', slot: 'table' },
        { label: 'Calendar', icon: 'i-lucide-calendar', slot: 'calendar' },
        { label: 'Chart', icon: 'i-lucide-chart-column-increasing', slot: 'chart' },
      ]"
    >
      <template #table>
        <UTable
          :data="[
            {
              id: '4600',
              date: '2024-03-11T15:30:00',
              status: 'paid',
              email: 'james.anderson@example.com',
              amount: 594,
            },
            {
              id: '4599',
              date: '2024-03-11T10:10:00',
              status: 'failed',
              email: 'mia.white@example.com',
              amount: 276,
            },
          ]"
        />
      </template>

      <template #calendar>
        <UCalendar v-model="calendarValue" />
      </template>

      <template #chart>
        <div class="h-100">
          <VChart
            :option="option"
            autoresize
          />
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>
