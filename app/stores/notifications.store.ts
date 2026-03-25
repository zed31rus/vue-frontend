import { defineStore } from "pinia"
import AppNotification, { type CallbackType } from "~/composable/notifications";
import { NotificationsTypes } from "~/types/notification"

const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
        items: [] as AppNotification[]
    }),
    actions: {
        createNotification(type: NotificationsTypes, content : { title: string, message: string, additional: string }, action: CallbackType | null = null, duration: number = 3000) {
            const notification = new AppNotification(type, content, action, duration);

            this.items.unshift(notification);

            notification.addEventListener('close', () => {
                const index = this.items.indexOf(notification);
                if (index !== -1) this.items.splice(index, 1);
            }, { once: true });

            return notification;
        }
    }
});

export default useNotificationStore;
export type notificationStoreType = ReturnType<typeof useNotificationStore>;