<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please register</h1>
            <div class="form-floating">
                <input v-model="data.first_name" class="form-control" placeholder="First Name">
                <label>First Name</label>
            </div>
            <div class="form-floating">
                <input v-model="data.last_name" class="form-control" placeholder="Last Name">
                <label>Last Name</label>
            </div>

            <div class="form-floating">
                <input v-model="data.email" type="email" class="form-control" placeholder="name@example.com">
                <label>Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="data.password" type="password" class="form-control" placeholder="Password">
                <label>Password</label>
            </div>
            <div class="form-floating">
                <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm">
                <label>Password Confirm</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import axios from 'axios'
import { useRouter } from 'vue-router'


const data = reactive({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: ''
})
const router = useRouter()


const submit = async () => {
    console.log(data)
    await axios.post('register', data)
    await router.push('/login')
}
</script>