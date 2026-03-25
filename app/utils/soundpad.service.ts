import { NotificationsTypes } from "~/types/notification";

export default class SounpadService {
    notificationStore: notificationStoreType;

    constructor(notificationStore: notificationStoreType) {
        this.notificationStore = notificationStore;
    }

    async play(index: number) {
        try {
            const res = await fetch('https://soundpadapi.zed31rus.ru/soundpad/playSound', {
            method: 'POST',
            body: JSON.stringify({ soundId: index }),
            headers: { 'Content-Type': 'application/json' }
            });
            
        } catch {
            this.notificationStore.createNotification( NotificationsTypes.error, { title: 'Soundpad error', message: 'Error playing sound', additional: 'zed31rus.ru'},{ name: "Retry", fn: () => this.play(index) })
        }
    }

    async stop() {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/stopSound', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            });

        } catch {
            this.notificationStore.createNotification( NotificationsTypes.error, { title: 'Soundpad error', message: 'Error stopping sound', additional: 'zed31rus.ru'},{ name: "Retry", fn: () => this.stop() })
        }
    }

     async pause() {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/pauseSound', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            });
            

        } catch {
            this.notificationStore.createNotification( NotificationsTypes.error, { title: 'Soundpad error', message: 'Error pausing sound', additional: 'zed31rus.ru'},{ name: "Retry", fn: () => this.pause() })
        }
    }

     async jump(percentage: number) {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/jump', {
            method: 'POST',
            body: JSON.stringify({ percentage }),
            headers: { 'Content-Type': 'application/json' }
            });

        } catch {
            this.notificationStore.createNotification( NotificationsTypes.error, { title: 'Soundpad error', message: 'Error rewinding sound', additional: 'zed31rus.ru'},{ name: "Retry", fn: () => this.jump(percentage) })
        }
    }

     async setVolume(volumeVal: number) {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/setVolume', {
            method: 'POST',
            body: JSON.stringify({ volume: volumeVal }),
            headers: { 'Content-Type': 'application/json' }
            });
            
        } catch {
            this.notificationStore.createNotification( NotificationsTypes.error, { title: 'Soundpad error', message: 'Error setting volume', additional: 'zed31rus.ru'},{ name: "Retry", fn: () => this.setVolume(volumeVal) })
        }
    }
}