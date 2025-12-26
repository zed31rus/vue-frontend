<script setup>
import { defineProps } from 'vue'

defineProps({
  index: Number,
  tag: String,
  duration: String,
  playCount: Number,
  current: Object
})

</script>

<template>
  <button
    @click="handleClick"
    :class="[
      'flex flex-col items-start justify-start p-2 gap-1 rounded-lg transition-all duration-200 cursor-pointer h-14 text-xs sm:text-sm w-full overflow-hidden',
      current?.sound?.index == index
        ? 'bg-green-900 text-green-300 hover:bg-green-800 shadow-lg'
        : 'bg-black/30 text-white hover:bg-gray-700'
    ]"
  >
    <div class="w-full flex flex-col min-w-0">
      <div class="w-full min-w-0"> 
        <template v-if="current?.sound?.index == index">
          <span v-if="current.status === 'PLAYING'" class="text-green-400 font-bold block">⏸ pause</span>
          <span v-else-if="current.status === 'PAUSED'" class="text-yellow-400 font-bold block">▶️ resume</span>
          <span v-else class="block truncate">{{ tag }}</span>
        </template>
        <template v-else>
          <span class="block truncate w-full">{{ tag }}</span>
        </template>
      </div>

      <div class="flex justify-between text-gray-400 text-[10px] w-full mt-1">
        <span>#{{ index }}</span>
        <span class="truncate px-1">{{ duration }}</span> <span>▶{{ playCount }}</span>
      </div>
    </div>
  </button>
</template>
