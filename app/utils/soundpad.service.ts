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
            
            if (res.ok) {
                this.notificationStore.createNotification(`Sound ${index} is playing!`, NotificationsTypes.info)
            }

        } catch {
            this.notificationStore.createNotification("Error playing sound", NotificationsTypes.error, { name: "Retry", fn: () => this.play(index) })
        }
    }

    async stop() {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/stopSound', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            });

            if (res.ok) {
                this.notificationStore.createNotification(`Sound stopped`, NotificationsTypes.info)
            }

        } catch {
            this.notificationStore.createNotification("Error stopping sound", NotificationsTypes.error)
        }
    }

     async pause() {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/pauseSound', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            });
            
            if (res.ok) {
                this.notificationStore.createNotification(`Sound paused`, NotificationsTypes.info)
            }

        } catch {
            this.notificationStore.createNotification("Error pausing sound", NotificationsTypes.error)
        }
    }

     async jump(percentage: number) {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/jump', {
            method: 'POST',
            body: JSON.stringify({ percentage }),
            headers: { 'Content-Type': 'application/json' }
            });
            
            if (res.ok) {
                this.notificationStore.createNotification(`Sound rewinded to ${percentage}%`, NotificationsTypes.info)
            }

        } catch {
            this.notificationStore.createNotification("Error rewinding sound", NotificationsTypes.error)
        }
    }

     async setVolume(volumeVal: number) {
        try {
            const res = await fetch('http://127.0.0.1:3002/soundpad/setVolume', {
            method: 'POST',
            body: JSON.stringify({ volume: volumeVal }),
            headers: { 'Content-Type': 'application/json' }
            });
            
            if (res.ok) {
                this.notificationStore.createNotification(`Volume setted to ${volumeVal}`, NotificationsTypes.info)
            }

        } catch {
            this.notificationStore.createNotification("Error setting volume", NotificationsTypes.error)
        }
    }
}