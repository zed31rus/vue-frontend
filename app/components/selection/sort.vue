<script setup>
import { 
  ComboboxRoot, ComboboxInput, ComboboxAnchor, ComboboxTrigger, 
  ComboboxPortal, ComboboxContent, ComboboxViewport, ComboboxItem, 
  ComboboxItemIndicator, ComboboxEmpty 
} from 'reka-ui'
import { Motion, AnimatePresence } from 'motion-v';
import { Icon } from '@iconify/vue'

const { sortMethods } = defineProps({
  sortMethods: Array
})

const selectedSortMethod = defineModel()

</script>

<template>
  <ComboboxRoot v-model="selectedSortMethod" class="relative" v-slot="{ open }">
    <ComboboxAnchor 
      class="inline-flex items-center justify-between rounded-md border border-neutral-500 bg-neutral-700 px-3 text-sm h-10 gap-2 transition-all hover:border-neutral-400 focus-within:ring-2 focus-within:ring-white/5 focus-within:border-neutral-400 outline-none"
    >
      <ComboboxInput
        class="bg-transparent outline-none text-neutral-100 placeholder-neutral-400/60 w-full"
        placeholder="Сортировка..."
        :display-value="(val) => sortMethods.find(m => m.value === val)?.name || ''"
      />
      <ComboboxTrigger>
        <Icon 
          icon="lucide:chevrons-up-down" 
          class="h-4 w-4 text-cyan-400 shrink-0 transition-transform duration-300" 
          :class="{ 'rotate-180': open }"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal>
      <AnimatePresence>
        <ComboboxContent
          v-if="open"
          as-child
          position="popper"
          :side-offset="5"
          class="z-50 min-w-[220px] bg-neutral-800/95 backdrop-blur-xl overflow-hidden rounded-md border border-white/10 shadow-xl"
        >
          <Motion
            :initial="{ opacity: 0, scale: 0.95, y: -10 }"
            :animate="{ opacity: 1, scale: 1, y: 0 }"
            :exit="{ opacity: 0, scale: 0.95, y: -10 }"
            :transition="{ duration: 0.2, ease: 'easeOut' }"
          >
            <ComboboxViewport class="p-1">
              <ComboboxEmpty class="py-3 text-center text-xs text-neutral-400">
                Зачем ты сюда что-то вводишь вообще..? Серьзно там {{ sortMethods.length }} варианта всего... бро...
              </ComboboxEmpty>
              
              <ComboboxItem
                v-for="method in sortMethods"
                :key="method.id"
                :value="method.value "
                class="relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none text-neutral-300 data-[highlighted]:bg-cyan-500/20 data-[highlighted]:text-cyan-400 data-[state=checked]:text-white transition-all duration-200"
              >
                <ComboboxItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <Icon icon="lucide:check" class="h-4 w-4 text-cyan-400" />
                </ComboboxItemIndicator>
                
                <span class="truncate font-medium">{{ method.name }}</span>
              </ComboboxItem>
            </ComboboxViewport>
          </Motion>
        </ComboboxContent>
      </AnimatePresence>
    </ComboboxPortal>
  </ComboboxRoot>
</template>