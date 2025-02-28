<script setup lang="ts">
import Conversion from './components/Conversion.vue';
import { processNumber } from 'number-helper-functions';
import TheCredits from './components/TheCredits.vue';

const hgConversion = (d: number) => processNumber(d * 0.02953, 2);
const hpaConversion = (d: number) => processNumber(33.865 * d, 2);
</script>

<template>
  <div
    class="flex justify-center w-screen h-screen overflow-y-auto bg-sky-1 dark:bg-sky-950"
  >
    <div class="container text-center font-sans">
      <div class="container py-8">
        <img
          src="/logo.png"
          alt="Aviation Pressure converter"
          width="80"
          class="rounded-2xl border-2 border-solid border-gray-4 mb-3"
        />
        <h1 class="text-sky-9 dark:text-sky-1 font-800 mt-0 mb-4">
          Aviation Pressure converter
        </h1>
        <div class="text-sky-8 dark:text-sky-2 font-500">
          Convert between hectopascals (hPa) and inches of mercury (inHg)
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Conversion
          title="Hectopascal to inches of mercury"
          from="hPa"
          to="inHg"
          placeholder="1013.25"
          :conversion="hgConversion"
        ></Conversion>
        <Conversion
          title="Inches of mercury to hectopascal"
          from="inHg"
          to="hPa"
          placeholder="29.92"
          :conversion="hpaConversion"
        ></Conversion>
      </div>
      <hr class="my-5 border-gray-400 opacity-8" />
      <TheCredits />
    </div>
  </div>
</template>
