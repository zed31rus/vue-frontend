import useNotificationStore, { type notificationStoreType } from "~/stores/notifications.store";


export default class DynamicTitle {
  notifications: notificationStoreType;
  currentPageTitle: string | null;

  constructor(notificationStore: notificationStoreType ) {
    this.notifications = notificationStore;
    this.currentPageTitle = null;
  }

  init() {
    useHead({
      title: () => {
        if (this.notifications.items.length > 0) return `(${this.notifications.items.length}) zed31rus | ${this.currentPageTitle}`;
        if (this.notifications.items.length = 0) return `zed31rus | ${this.currentPageTitle}`;
      }
    });
  }

  setCurrentPageTitle(title: string) {
    this.currentPageTitle = title;
  }
}