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
        <button @click="notificationStore.createNotification(NotificationsTypes.info, { title: 'Info', message: 'Click!', additional: 'zed31rus.ru' })">
            info click
        </button>
    </div>
    <div>
        <button @click="notificationStore.createNotification(NotificationsTypes.warn, { title: 'Warn', message: 'Alarm!!!', additional: 'zed31rus.ru' }, { name: 'ALARM', fn: a })">
            warn ALARM!!!
        </button>
    </div>
    <div>
        <button @click="notificationStore.createNotification(NotificationsTypes.error, { title: 'Error', message: 'BOOM', additional: 'zed31rus.ru' })">
            error BOOM
        </button>
    </div>
</template>