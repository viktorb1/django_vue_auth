<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input v-model="data.email" type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mt-3">
                <input v-model="data.password" type="password" class="form-control" id="floatingPassword"
                    placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="mb-3 mt-3">
                <router-link to="/forgot">Forgot password?</router-link>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import axios from "axios"
import { useRouter } from 'vue-router'


const router = useRouter()

const data = reactive({
    email: '',
    password: '',
})

const submit = async () => {
    const response = await axios.post("login", data, { withCredentials: true })
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    await router.push('/')
}

</script>