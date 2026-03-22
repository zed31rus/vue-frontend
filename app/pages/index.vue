<script setup lang="ts">
    import useNotificationStore from '~/stores/notifications.store';
    import { NotificationsTypes } from '~/types/notification';

    definePageMeta({
        title: "zed31rus.ru | Home"
    })

    const notificationStore = useNotificationStore();

    async function a() {
        alert("ALARM!!!")
    }

</script>
<template>
    <div>
        <button @click="notificationStore.createNotification('click!!!', NotificationsTypes.info)">
            info click
        </button>
    </div>
    <div>
        <button @click="notificationStore.createNotification('ALARM', NotificationsTypes.warn, { name: 'ALARM', fn: a })">
            warn ALARM!!!
        </button>
    </div>
    <div>
        <button @click="notificationStore.createNotification('BOOM', NotificationsTypes.error)">
            error BOOM
        </button>
    </div>
</template>