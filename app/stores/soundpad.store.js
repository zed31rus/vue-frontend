import { defineStore } from "pinia";
import { io } from "socket.io-client";

const useSoundpadStore = defineStore('soundpad', {
    state: () => ({
        soundList: [],
        history: [],
        volume: 0,
        current: {
            sound: null,
            status: "STOPPED",
            position: 0,
            positionmmss: "0:00",
            duration: 0,
            durationmmss: "0:00",
            percentage: 0
        },
        socket: null
    }),
    actions: {
        initSocket() {
            this.socket = io('https://soundpadapi.zed31rus.ru')
            //this.socket = io('http://127.0.0.1:3002')

            this.socket.on('currentUpdated', (data) => {
                Object.assign(this.current, data)
            })

            this.socket.on('historyUpdated', (data) => {
                this.history = data
            })

            this.socket.on('soundListUpdated', (data) => {
                this.soundList = data
            })

            this.socket.on('volumeUpdated', (data) => {
                this.volume = data
            })
        }
    }
});

export default useSoundpadStore