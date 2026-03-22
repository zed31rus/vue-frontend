<script setup lang="ts">
import { Icon } from '@iconify/vue'
import useNotificationStore from '~/stores/notifications.store';
import useSoundpadStore from '~/stores/soundpad.store';
import SoundpadService from '~/utils/soundpad.service';

const soundpadStore = useSoundpadStore();
const notificationStore = useNotificationStore();
const soundpadService = new SoundpadService(notificationStore);

const { index, tag, durationmmss, playCount } = defineProps<{
  index: number,
  tag: String,
  durationmmss: String,
  playCount: number,
}>();

async function playSound(index: number) { await soundpadService.play(index) }

const isActive = () => soundpadStore.current?.sound?.index === index
const isPlaying = () => isActive() && soundpadStore.current?.status === 'PLAYING'
const isPaused = () => isActive() && soundpadStore.current?.status === 'PAUSED'
</script>

<template>
  <button
    @click="playSound(index)"
    :class="[
      'group relative flex flex-col justify-between p-3 rounded-xl transition-all duration-300 border outline-none h-20 w-full overflow-hidden',
      isActive() 
        ? 'bg-cyan-500/15 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/20' 
        : 'bg-neutral-900/60 border-white/5 backdrop-blur-md hover:bg-neutral-800/80 hover:border-white/10 hover:shadow-lg hover:-translate-y-0.5'
    ]"
  >
    <div v-if="isActive()" class="absolute -right-4 -top-4 w-12 h-12 bg-cyan-500/20 blur-2xl rounded-full" />

    <div class="w-full flex justify-between items-start z-10">
      <div class="flex flex-col items-start min-w-0">
        <span class="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-0.5">
          Track {{ index.toString().padStart(2, '0') }}
        </span>
        <span 
          :class="[
            'block truncate font-semibold text-[15px] tracking-tight transition-colors',
            isActive() ? 'text-cyan-300' : 'text-neutral-100 group-hover:text-white'
          ]"
        >
          {{ tag }}
        </span>
      </div>

      <div class="shrink-0 mt-1">
        <div 
          :class="[
            'flex items-center justify-center w-8 h-8 rounded-full transition-all',
            isActive() ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white'
          ]"
        >
          <Icon v-if="isPlaying()" icon="ph:pause-fill" class="h-5 w-5" />
          <Icon v-else icon="ph:play-fill" :class="[isActive() ? 'h-5 w-5' : 'h-4 w-4 ml-0.5']" />
        </div>
      </div>
    </div>

    <div class="flex items-center gap-3 z-10">
      <div class="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-black/20 border border-white/5 text-neutral-400 text-[10px] font-medium">
        <Icon icon="ph:clock-fill" class="h-3 w-3" />
        {{ durationmmss }}
      </div>
      <div class="flex items-center gap-1.5 text-neutral-500 text-[10px] font-medium">
        <Icon icon="ph:chart-bar-fill" class="h-3 w-3" />
        {{ playCount }}
      </div>
    </div>

    <div 
      v-if="isActive()" 
      class="absolute bottom-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"
      :style="{ width: isPlaying() ? '100%' : '0%' }"
      :class="isPlaying() ? 'duration-[3000ms] ease-linear' : 'duration-300'"
    />
  </button>
</template>

<style scoped>
button {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>