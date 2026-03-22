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