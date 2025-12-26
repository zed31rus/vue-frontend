<script setup>
    import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'reka-ui';
    import { defineModel } from 'vue';
    import { Icon } from '@iconify/vue';
    import {
        ToolbarButton,
        ToolbarLink,
        ToolbarRoot,
        ToolbarSeparator,
        ToolbarToggleGroup,
        ToolbarToggleItem,
        } from 'radix-vue'

    const selectedSortMethod = defineModel();

    const sortMethods = [
        {id: 1, value: "index", name: "номер звука", sort: (a,b) => a.index - b.index},
        {id: 2, value: "tag", name: "имя", sort: (a,b) => a.tag.localeCompare(b.tag)},
        {id: 3, value: "playCount", name: "количество воспроизведений", sort: (a,b) => a.playCount - b.playCount},
    ]

    if (!selectedSortMethod.value) selectedSortMethod.value = sortMethods[0];
</script>

<template>
  <ComboboxRoot
    class="relative"
  >
    <ComboboxAnchor class="min-w-[160px] inline-flex items-center justify-between rounded-lg border px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 hover:bg-stone-50 shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
      <ComboboxInput
        class="!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-stone-400"
        placeholder="Placeholder..."
      />
      <ComboboxTrigger>
        <Icon
          icon="radix-icons:chevron-down"
          class="h-4 w-4 text-grass11"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="absolute z-10 w-full mt-1 min-w-[160px] bg-white overflow-hidden rounded-lg shadow-sm border will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
      <ComboboxViewport class="p-[5px]">
        <ComboboxEmpty class="text-mauve8 text-xs font-medium text-center py-2" />
            <ComboboxItem
              v-for="sortMethod in sortMethods"
              :key="sortMethod.id"
              :value="sortMethod.value"
              class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1"
            >
              <span>
                {{ sortMethod.name }}
              </span>
            </ComboboxItem>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>