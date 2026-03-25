<script setup lang="ts">
    import type { CallbackType } from '~/composable/notifications';

    const { title, message, additional, color, mouseEnterAction, mouseLeaveAction, clickAction, buttonAction } = defineProps<{
        title: string,
        message: string,
        additional: string,
        color: string,
        mouseEnterAction: () => void,
        mouseLeaveAction: () => void,
        clickAction: () => void,
        buttonAction: CallbackType | null;
    }>();
</script>

<template>

    <li
        @mouseenter="mouseEnterAction()"
        @mouseleave="mouseLeaveAction()"
        @click="clickAction()"
        class="notification-item group pointer-events-auto cursor-pointer 
               relative overflow-hidden w-80 min-w-full sm:min-w-[320px]
               bg-neutral-900/50 backdrop-blur-xl 
               p-4 rounded-l-2xl rounded-r-md shadow-2xl transition-all duration-300
               hover:bg-neutral-900/70"
    >
        <div class="absolute right-0 top-0 bottom-0 w-2 opacity-80" :class="color"></div>
        
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between gap-3">
                <h1 class="text-[13px] font-bold text-white tracking-tight uppercase opacity-90">
                    {{ title }}
                </h1>
            </div>

            <div class="space-y-1">
                <p class="text-sm text-white/80 leading-relaxed font-light">
                    {{ message }}
                </p>

                <p v-if="additional" class="text-[11px] text-white/40 italic font-medium tracking-wide">
                    {{ additional }}
                </p>
            </div>

            <div v-if="buttonAction" class="mt-2 flex justify-end">
                <button 
                    @click.once.stop="buttonAction.fn()" 
                    class="relative overflow-hidden px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest 
                           text-white bg-white/5 
                           rounded-lg transition-all duration-200
                           hover:bg-white/15"
                >
                    {{ buttonAction.name }}
                </button>
            </div>
        </div>
    </li>
    
</template>