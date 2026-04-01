<script setup lang="ts">
    import useNotificationStore from '~/stores/notifications.store';
import useTitleStore from '~/stores/title.store';
    import { NotificationsTypes } from '~/types/notification';

    const titleStore = useTitleStore();
    titleStore.setCurrentPageTitle('Home')

    const notificationStore = useNotificationStore();

    async function a() {
        alert("ALARM!!!")
    }

    function handleInfoClick() {
    setTimeout(() => {
        notificationStore.createNotification(
            NotificationsTypes.info,
            { title: 'Info', message: 'Click!', additional: 'zed31rus.ru' }
        );
    }, 3000);
}

async function mail() {

    const resRefresh = await fetch('http://localhost:3010/auth/refresh', {
        method: "POST",
        credentials: 'include'
    })

    if (resRefresh.ok) console.log("refreshOK")

    const res = await fetch('http://localhost:3010/account/emailVerificationSend', {
        method: "POST",
        credentials: 'include'
    });

    console.log(await res.json())
}

</script>
<template>
    <div>
        <button @click="handleInfoClick">
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
    <div>
        <button @click="notificationStore.createNotification(NotificationsTypes.error, { title: 'GANZ SOSI ZALUPU', message: 'huihuihuihuihuihui', additional: 'наебаловоСтан.кома' }, {name: 'ЧЕЧНЯ', fn: () => { navigateTo('https://www.aviasales.com/', {external: true}) }})">
            error BOOM
        </button>
    </div>
    <div>
        <button @click="mail">
            mail
        </button>
    </div>
</template>