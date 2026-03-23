<script setup>
    const mode = ref("login") // login/register

</script>

<template>
    <button @click="mode = (mode === 'login' ? 'register' : 'login')">
        swap
    </button>

    <div>
        <AuthLogin v-if="mode === 'login'"/>
        <AuthRegister v-if="mode === 'register'"/>
    </div>
</template>