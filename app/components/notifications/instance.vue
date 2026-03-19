<script setup lang="ts">

    const { message, mouseEnterAction, mouseLeaveAction, clickAction, buttonAction } = defineProps<{
        message: String,
        color: String,
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
        class="notification-item pointer-events-auto cursor-pointer 
                w-auto bg-neutral-800/50 backdrop-blur p-4 rounded-2xl shadow-lg"
        @click="clickAction()"
    >
        <div class="flex items-center gap-3">
            <span class="text-sm font-medium text-white/90 tracking-wide flex-1">
                {{ message }}
            </span>
            <div :class="['w-1.5 h-5 rounded-full shrink-0', color]"></div>
        </div>

        <div v-if="buttonAction" class="mt-3 flex justify-end">
            <button 
            @click.stop="buttonAction.fn()" 
            class="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider 
                text-white bg-white/10 hover:bg-white/20 
                border border-white/10 rounded-lg transition-colors
                active:scale-95 duration-200"
            >
            {{ buttonAction.name }}
            </button>
        </div>
    </li>
</template>