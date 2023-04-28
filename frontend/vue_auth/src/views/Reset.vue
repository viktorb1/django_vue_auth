<template>
    <main class="form-signin w-100 m-auto mt-3">
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please reset your password:</h1>
            <div class="form-floating mt-3">
                <input v-model="data.password" type="password" class="form-control" placeholder="Password">
                <label>Password</label>
            </div>
            <div class="form-floating mt-3">
                <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm">
                <label>Password Confirm</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from "axios"
const data = reactive({
    password: '',
    password_confirm: ''
})

const route = useRoute()
const router = useRouter()

const submit = async () => {
    await axios.post("reset", {
        ...data,
        token: route.params.id
    })

    await router.push('/login')
}
</script>