<script setup>
import { Motion, AnimatePresence } from 'motion-v';
import { Icon } from '@iconify/vue'
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'

const { sortMethods } = defineProps({
  sortMethods: Array
})

const selectedSortMethod = defineModel()

</script>

<template>
  <SelectRoot v-model="selectedSortMethod" class="relative" v-slot="{ open }">

    <SelectTrigger class="inline-flex items-center justify-between rounded-lg px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-neutral-800/50 backdrop-blur-xl border border-white/5 shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none">
      <SelectValue  placeholder="Выбрать способ сортировки..."/>
      <Icon 
        icon="lucide:chevrons-up-down" 
        class="h-4 w-4 text-cyan-400 shrink-0 transition-transform duration-300" 
        :class="{ 'rotate-180': open }"
      />
    </SelectTrigger>

    <SelectPortal>
      <AnimatePresence>
        <SelectContent
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
            <SelectViewport class="p-1">            
              <SelectItem
                v-for="method in sortMethods"
                :key="method.id"
                :value="method"
                class="relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none text-neutral-300 data-[highlighted]:bg-cyan-500/20 data-[highlighted]:text-cyan-400 data-[state=checked]:text-white transition-all duration-200"
              >
                <SelectItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <Icon icon="lucide:check" class="h-4 w-4 text-cyan-400" />
                </SelectItemIndicator>
                
                <span class="truncate font-medium">{{ method.name }}</span>
              </SelectItem>
            </SelectViewport>
          </Motion>
        </SelectContent>
      </AnimatePresence>
    </SelectPortal>
  </SelectRoot>
</template>