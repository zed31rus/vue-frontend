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

async function sendVerificationMail() {
    try {

        await $fetch('http://localhost:3100/auth/refresh', {
            method: "POST",
            credentials: 'include'
        });
        
        console.log('Сессия обновлена');

        const response = await $fetch('http://localhost:3100/account/emailVerificationSend', {
            method: "POST",
            credentials: 'include'
        });

        console.log('Письмо отправлено:', response);

    } catch (err: any) {
        console.error('Ошибка в процессе:', err.data || err.message);

        notificationStore.createNotification(NotificationsTypes.error, { 
            title: "Ошибка", 
            message: err.data?.message || "Не удалось отправить письмо",
            additional: "zed31rus.ru"
        });
    }
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
        <button @click="sendVerificationMail">
            mail
        </button>
    </div>
</template>