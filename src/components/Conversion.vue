<template>
  <div
    class="rounded-3xl border border-solid border-gray-300 bg-gray-50 p-6 shadow dark:border-gray-800 dark:bg-sky-900"
  >
    <h2 class="text-dark-6 mb-4 text-xl dark:text-white">{{ title }}</h2>
    <div class="grid gap-2">
      <label :for="id" class="text-dark-3 dark:text-gray-2 font-500 text-lg">{{
        from
      }}</label>
      <div>
        <input
          type="number"
          step="0.01"
          :id="id"
          v-model.number="toConvert"
          class="text-gray-9 dark:text-gray-1 border-slate-5 rounded-lg border border-solid p-3 text-center font-mono text-lg placeholder:text-gray-400 dark:bg-sky-800"
        />
      </div>
      <div class="font-300 text-gray-7 dark:text-gray-3 text-sm">
        Standard pressure: {{ placeholder }}
      </div>
    </div>
    <div class="grid gap-2">
      <h3 class="text-dark-3 dark:text-gray-2 font-500 mb-0 text-lg">
        {{ to }}
      </h3>
      <div class="font-mono text-lg dark:text-slate-100">{{ converted }}</div>
      <div class="justify-center">
        <button
          class="btn bg-blue-2 dark:bg-blue-9 hover:bg-blue-3 dark:hover:bg-blue-7 dark:text-white"
          @click="() => copy(converted.toString())"
          :disabled="copied"
        >
          <div class="i-tabler-copy"></div>
          {{ copied ? "Copied" : "Copy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { computed, ref, useId } from "vue";

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
