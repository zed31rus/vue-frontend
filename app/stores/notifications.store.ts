import { defineStore } from "pinia"
import AppNotification, { type CallbackType } from "~/composable/notifications";
import { NotificationsTypes } from "~/types/notification"

const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        items: [] as AppNotification[]
    }),
    actions: {
        createNotification(message: string, type: NotificationsTypes, action?: CallbackType, duration: number = 3000) {
            const notification = new AppNotification(message, type, action, duration);

            this.items.unshift(notification);

            notification.addEventListener('close', () => {
                const index = this.items.indexOf(notification);
                if (index !== -1) this.items.splice(index, 1);
            }, { once: true });
        }
    }
});

export default useNotificationStore;
export type notificationStoreType = ReturnType<typeof useNotificationStore>;