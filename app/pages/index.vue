<script setup lang="ts">
    import { useNotificationsStore } from '#imports';
import { NotificationsTypes } from '~/types/notification';

    const notificationStore = useNotificationsStore();

    function a() {
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