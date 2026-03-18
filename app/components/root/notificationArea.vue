<script setup lang="ts">
import { useNotificationsStore, type AppNotificationType } from '@/stores/notifications.store';
import { NotificationsTypes } from '~/types/notification';
const notificationStore = useNotificationsStore();
const notificationWide = 100

function getTypeColor(type: NotificationsTypes) {
  return {
    [NotificationsTypes.info]: 'bg-cyan-600',
    [NotificationsTypes.error]: 'bg-red-600',
    [NotificationsTypes.warn]: 'bg-orange-600',
  }[type] || 'bg-neutral-400';
};

function close(notification: AppNotificationType) {
  notification.destroy(); 
};

function beforeLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = element.offsetHeight + 'px';
  element.style.width = element.offsetWidth + 'px';
}

</script>

<template>
    <div class="fixed inset-0 z-[100] pointer-events-none"> 
        
        <TransitionGroup 
            name="notificationList" 
            tag="ul" 
            class="relative w-full h-full list-none flex flex-col items-end gap-3 p-4"
            @before-leave="beforeLeave"
        >
            <li
                v-for="item in notificationStore.items"
                :key="item.id"
                @mouseenter="item.pause()"
                @mouseleave="item.resume()"
                class="notification-item pointer-events-auto cursor-pointer 
                       w-auto bg-neutral-800/50 backdrop-blur p-4 rounded-2xl shadow-lg"
                @click="close(item)"
            >
                <div class="flex items-center gap-3">
                    <span class="text-sm font-medium text-white/90 tracking-wide flex-1">
                        {{ item.message }}
                    </span>
                    <div :class="['w-1.5 h-5 rounded-full shrink-0', getTypeColor(item.type)]"></div>
                </div>

                <div v-if="item.action" class="mt-3 flex justify-end">
                  <button 
                    @click="item.action.fn()" 
                    class="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider 
                      text-white bg-white/10 hover:bg-white/20 
                      border border-white/10 rounded-lg transition-colors
                      active:scale-95 duration-200"
                  >
                    {{ item.action.name }}
                  </button>
                </div>
            </li>
        </TransitionGroup>
    </div>
</template>

<style scoped>

.notificationList-move,
.notificationList-enter-active,
.notificationList-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.notificationList-enter-from,
.notificationList-leave-to {
  transform: translate(150px, 0);
}

.notificationList-leave-active {
  position: absolute;
  right: 0;
}
</style>