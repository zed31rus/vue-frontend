import useNotificationStore from "./notifications.store";

const notificationsStore = useNotificationStore();

const useTitleStore = defineStore('Title', {
    state: {
        notificationsStore: notificationsStore,
        currentPageTitle : ''
    }, actions: {
        init: () => {
            useHead({
                title: () => {
                    if (notificationsStore.items.length > 0) return `(${notificationsStore.items.length}) zed31rus | ${currentPageTitle}`;
                    if (notificationsStore.items.length = 0) return `zed31rus | ${currentPageTitle}`;
                }
            });
        }
    }
})