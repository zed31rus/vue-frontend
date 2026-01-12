<template>
      <ScrollAreaRoot 
        class="flex-1 overflow-hidden bg-neutral-800/50 backdrop-blur  rounded-2xl border border-white/5"
      >
        <ScrollAreaViewport class="w-full h-full p-6">
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
              <slot></slot>
          </div>

        </ScrollAreaViewport>

        <ScrollAreaScrollbar
          class="flex select-none touch-none p-0.5 bg-neutral-950/20 transition-all duration-300 ease-out hover:bg-neutral-950/40 data-[orientation=vertical]:w-2"
          orientation="vertical"
        >
          <ScrollAreaThumb 
            class="relative flex-1 rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors" 
          />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
</template>