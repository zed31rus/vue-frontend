import useNotificationStore from "~/stores/notifications.store";

export default function useDynamicTitle() {
  const notifications = useNotificationStore();
  const route = useRoute();

  useHead({
    title: () => {
      if (notifications.items.length > 0) {
        return `(${notifications.items.length}) ${route.meta.title}`;
      }

      return (route.meta.title as string);
    }
  });
}

export class DynamicTitle {
  notifications: ReturnType<typeof useNotificationStore>;
  pageTitle: string;

  constructor() {
    this.notifications = useNotificationStore();
    this.pageTitle = 'zed31rus.ru';

  useHead({
    title: () => {
      if (this.notifications.items.length > 0) {
        return `(${this.notifications.items.length}) ${this.pageTitle}`;
      }

      return (this.pageTitle as string);
    }
  });
  }
}