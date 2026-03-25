import type { NotificationsTypes } from "~/types/notification";

export default class AppNotification extends EventTarget {
    id: string = crypto.randomUUID();
    content: {
        title: string,
        message: string,
        additional: string,
    };
    type: NotificationsTypes;
    isAlive: boolean = true;
    action: CallbackType | null = null;
    
    timeoutId: ReturnType<typeof setTimeout> | null = null;
    startTime: number = 0;
    remaining: number;

    constructor(type: NotificationsTypes, content : { title: string, message: string, additional: string }, action: CallbackType | null = null, duration: number) {
        super();
        this.content = content;
        this.type = type;
        this.remaining = duration;
        this.action = action;
        this.resume();
    }

    pause() {
        if (!this.isAlive || !this.timeoutId) return;

        clearTimeout(this.timeoutId);
        this.timeoutId = null;
        if (this.startTime) {
            this.remaining -= Date.now() - this.startTime;
        }
    }

    resume() {
        if (!this.isAlive || this.timeoutId) return;
        if (this.remaining <= 0) return this.destroy();

        this.startTime = Date.now();
        this.timeoutId = setTimeout(() => {
            this.destroy();
        }, this.remaining);
    }

    destroy() {
        if (!this.isAlive) return;
        this.isAlive = false;
        if (this.timeoutId) clearTimeout(this.timeoutId);

        this.dispatchEvent(new Event('close'));
    }

    callback() {
        if (!this.isAlive) return;
        if (!this.action) return;
        this.action.fn.call(null);
        this.destroy();
    }
}

export type CallbackType = {
    name: string,
    fn: ActionType
}
export type AppNotificationType = InstanceType<typeof AppNotification>
export type ActionType = (...args: any[]) => void
