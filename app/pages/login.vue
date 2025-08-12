<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: false,
})

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(6, 'Must be at least 6 characters'),
})

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  email: '',
  password: '',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: JSON.stringify(state), color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <main class="flex h-screen w-screen items-center justify-center bg-[#121212]">
    <UCard class="w-full max-w-150">
      <template #header>
        <span class="font-bold">登录</span>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField
          label="Email"
          name="email"
          required
        >
          <UInput
            v-model="state.email"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
          required
        >
          <UInput
            v-model="state.password"
            type="password"
            autocomplete="new-password"
            class="w-full"
          />
        </UFormField>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>
  </main>
</template>
