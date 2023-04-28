<template>
    <div class="container mt-5 text-center">
        <h3>{{ authStore.auth ? message : "You are not logged in" }}</h3>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios'
import { useAuthStore } from '@/stores';

const message = ref("")
const authStore = useAuthStore()

onMounted(async () => {
    try {
        const { data } = await axios.get("user")
        console.log("data")
        message.value = `Hi ${data.first_name} ${data.last_name}`
        authStore.setAuth(true)
    } catch (e) {
        console.log("error was caught in home")
        authStore.setAuth(false)
    }
})

</script>
