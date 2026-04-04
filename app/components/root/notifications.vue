<script setup lang="ts">
import useNotificationStore from '@/stores/notifications.store';
import type { AppNotificationType } from '~/composable/notifications';
import { NotificationsTypes } from '~/types/notification';

const notificationStore = useNotificationStore();

const getTypeColor = (type: NotificationsTypes): string => {
    const colors = {
        [NotificationsTypes.info]: 'bg-cyan-600',
        [NotificationsTypes.error]: 'bg-red-600',
        [NotificationsTypes.warn]: 'bg-orange-600',
    };
    return colors[type] || 'bg-neutral-400';
};

const close = (notification: AppNotificationType) => {
    notification.destroy(); 
};
</script>

<template>
    <NotificationsArea>
        <NotificationsInstance 
            v-for="item in notificationStore.items" 
            :key="item.id"
            :title="item.content.title"
            :message="item.content.message"
            :additional="item.content.additional"
            :color="getTypeColor(item.type)"
            :mouseEnterAction="() => item.pause()" 
            :mouseLeaveAction="() => item.resume()"
            :clickAction="() => close(item)"
            :buttonAction="item.action"
        />

        <div v-if="notificationStore.items.length > 1" class="mt-2 flex justify-end">
            <button 
                @click.once.stop="notificationStore.closeAllNotifications();" 
                class="relative overflow-hidden px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest 
                text-white bg-white/5 
                rounded-lg transition-all duration-200
                hover:bg-white/15"
            >
                {{ 'close all' }}
            </button>
        </div>

    </NotificationsArea>
</template>