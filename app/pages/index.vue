<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const calendarValue = shallowRef(new CalendarDate(2025, 8, 1))
</script>

<template>
  <UContainer class="mt-5">
    <UTabs
      :items="[
        { label: 'Table', icon: 'i-lucide-table', slot: 'table' },
        { label: 'Calendar', icon: 'i-lucide-calendar', slot: 'calendar' },
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
    </UTabs>
  </UContainer>
</template>
