<script setup lang="ts">
import { ref } from 'vue';
import useNotificationStore from '~/stores/notifications.store';
import { NotificationsTypes } from '~/types/notification';

const login = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const notificationStore = useNotificationStore();

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        notificationStore.createNotification("Passwords do not match", NotificationsTypes.error);
        return;
    }
};
</script>

<template>
    <div>
        
        <div class="flex items-center justify-between mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-white/90 tracking-tight">Create Account</h1>
                <p class="text-sm text-white/40 mt-1">Join our community today</p>
            </div>
            <div class="w-1.5 h-12 rounded-full bg-emerald-600"></div>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Login</label>
                <input v-model="login" type="text" placeholder="Choose a name"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Username</label>
                <input v-model="username" type="text" placeholder="Choose a name"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Email</label>
                <input v-model="email" type="email" placeholder="your@email.com"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Password</label>
                <input v-model="password" type="password" placeholder="••••••••"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Confirm Password</label>
                <input v-model="confirmPassword" type="password" placeholder="••••••••"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="pt-4">
                <button type="submit"
                    class="w-full py-3 px-4 bg-emerald-600/20 hover:bg-white/20 text-emerald-400 font-semibold uppercase tracking-wider text-sm rounded-xl transition-all active:scale-[0.98] duration-200">
                    Get Started
                </button>
            </div>

        </form>

        <div class="mt-6 text-center">
            <p class="text-sm text-white/40">
                Already have an account? 
                <button 
                    @click="$emit('switch')" 
                    type="button"
                    class="text-emerald-400 hover:text-emerald-300 font-medium transition-colors ml-1"
                >
                Sign in
                </button>
            </p>
        </div>

    </div>
</template>