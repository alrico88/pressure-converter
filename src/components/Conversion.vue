<template>
  <div
    class="bg-gray-50 dark:bg-sky-900 p-6 rounded-3xl border border-solid border-gray-300 shadow"
  >
    <h2 class="text-dark-6 dark:text-white text-xl mb-4">{{ title }}</h2>
    <div class="grid gap-2">
      <label :for="id" class="text-dark-3 dark:text-gray-2 text-lg font-500">{{
        from
      }}</label>
      <div>
        <input
          type="number"
          step="0.01"
          :id="id"
          v-model.number="toConvert"
          class="text-center rounded-lg p-3 text-gray-9 dark:text-gray-1 dark:bg-sky-800 border border-solid border-slate-7 placeholder:text-gray-400 font-mono text-lg"
        />
      </div>
      <div class="text-sm font-300 text-gray-7 dark:text-gray-3">
        Standard pressure: {{ placeholder }}
      </div>
    </div>
    <div class="grid gap-2">
      <h3 class="text-dark-3 dark:text-gray-2 text-lg mb-0 font-500">
        {{ to }}
      </h3>
      <div class="font-mono text-lg">{{ converted }}</div>
      <div class="justify-center">
        <button
          class="border-0 bg-blue-2 dark:bg-blue-9 hover:bg-blue-3 dark:hover:bg-blue-7 hover:cursor-pointer rounded-lg px-3 py-2 transition-colors"
          @click="() => copy(converted.toString())"
          :disabled="copied"
        >
          <div class="i-tabler-copy"></div>
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { computed, ref, useId } from 'vue';

const props = defineProps<{
  title: string;
  from: string;
  to: string;
  placeholder: string;
  conversion: (val: number) => number;
}>();

const id = useId();

const toConvert = ref(Number(props.placeholder));

const converted = computed(() => props.conversion(toConvert.value));

const { copied, copy } = useClipboard();
</script>
