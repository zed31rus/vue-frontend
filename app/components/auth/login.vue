<script setup lang="ts">
import { ref } from 'vue';

const login = ref('');
const password = ref('');

const handleLogin = () => {};
</script>

<template>
<div class="min-h-screen w-full flex items-center justify-center">
    <div class="w-full max-w-md bg-neutral-800/50 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl">
        
        <div class="flex items-center justify-between mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-white/90 tracking-tight">Sign in</h1>
                <p class="text-sm text-white/40 mt-1">Return to our community today</p>
            </div>
            <div class="w-1.5 h-12 rounded-full bg-cyan-600"></div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Login</label>
                <input v-model="login" placeholder="Enter your login"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-cyan-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-medium text-white/50 uppercase tracking-widest ml-1">Password</label>
                <input v-model="password" type="password" placeholder="••••••••"
                    class="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 
                    focus:outline-none focus:ring-2 focus:ring-cyan-600/50 focus:bg-white/10 transition-all duration-300"
                    required />
            </div>

            <div class="pt-4">
                <button type="submit"
                    class="w-full py-3 px-4 bg-cyan-600/20 hover:bg-white/20 text-cyan-400 font-semibold uppercase tracking-wider text-sm rounded-xl transition-all active:scale-[0.98] duration-200">
                    Sign In
                </button>
            </div>

        </form>
    </div>
</div>
</template>