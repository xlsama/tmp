<script setup lang="ts">
import { animate } from 'motion-v'

const props = withDefaults(
  defineProps<{
    value: number
    from?: number
    duration?: number
    decimals?: number
  }>(),
  {
    from: 0,
    duration: 0.6,
    decimals: 0,
  },
)

const initialValue = Number.isFinite(props.from)
  ? (props.from as number)
  : Number.isFinite(props.value)
    ? props.value
    : 0

const animatedValue = ref(initialValue)

let controls: ReturnType<typeof animate> | undefined

const decimals = computed(() => Math.max(0, props.decimals))
const duration = computed(() => Math.max(0, props.duration))

const formattedValue = computed(() => {
  if (!Number.isFinite(animatedValue.value)) {
    return String(animatedValue.value)
  }

  const digits = decimals.value
  return animatedValue.value.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
})

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value)
}

function stopAnimation() {
  if (controls) {
    controls.stop()
    controls = undefined
  }
}

function runAnimation(from: number, to: number) {
  stopAnimation()

  if (from === to || duration.value <= 0) {
    animatedValue.value = to
    return
  }

  controls = animate(from, to, {
    duration: duration.value,
    ease: [0.16, 1, 0.3, 1],
    onUpdate: (latest: number) => {
      animatedValue.value = latest
    },
    onComplete: () => {
      animatedValue.value = to
      controls = undefined
    },
  })
}

watch(
  () => props.value,
  (next, previous) => {
    if (!isFiniteNumber(next)) {
      stopAnimation()
      animatedValue.value = next
      return
    }

    const start = isFiniteNumber(previous)
      ? previous
      : isFiniteNumber(animatedValue.value)
        ? animatedValue.value
        : props.from ?? 0

    if (!isFiniteNumber(start)) {
      animatedValue.value = next
      return
    }

    runAnimation(start, next)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  stopAnimation()
})
</script>

<template>
  <span>
    <slot
      :value="animatedValue"
      :formatted-value="formattedValue"
    >
      {{ formattedValue }}
    </slot>
  </span>
</template>
