<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(
  defineProps<{
    header?: string
    body?: boolean
    isOpen?: boolean
    width?: string
    height?: string
  }>(),
  {
    width: 'w-[900px]',
  }
)
const isOpen = ref(props.isOpen)
</script>

<template>
  <transition name="fade">
    <div>
      <div class="fixed inset-0 z-40 bg-black opacity-70"></div>
      <div
        :class="`max-w-full ${width} ${height} max-h-[800px] z-50 overflow-y-auto fixed inset-0 mx-auto my-auto rounded-xl shadow-lg bg-white`"
      >
        <label
          class="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer z-30 text-black"
          @click.prevent="$emit('close')"
          >✕</label
        >
        <div class="flex w-full h-full justify-center">
          <div>
            <div class="text-center flex-auto justify-center leading-6 text-black">
              <slot name="header"></slot>
            </div>
            <div class="text-center text-md">
              <slot name="body"></slot>
            </div>
            <div class="text-center text-md">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
