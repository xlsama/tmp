<script setup lang="ts">
import z from 'zod'

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
</script>

<template>
  <main class="grid min-h-screen place-items-center bg-gray-50 px-4">
    <UButton
      icon="i-lucide-arrow-left"
      class="fixed top-10 left-10 z-10 rounded-full hover:bg-gray-100"
      variant="ghost"
      to="/"
    />
    <UCard class="w-full max-w-150">
      <template #header>
        <span class="font-bold">登录</span>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="
          () => {
            toast.add({ title: 'Success', description: JSON.stringify(state), color: 'success' })
          }
        "
      >
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="Password" name="password" required>
          <UInput
            v-model="state.password"
            type="password"
            autocomplete="new-password"
            class="w-full"
          />
        </UFormField>

        <UButton type="submit">Submit</UButton>
      </UForm>
    </UCard>
  </main>
</template>
