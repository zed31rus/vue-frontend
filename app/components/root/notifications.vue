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
    </NotificationsArea>
</template>