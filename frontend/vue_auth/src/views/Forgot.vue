<template>
    <main class="form-signin w-100 m-auto">
        <div v-if="notify.cls" :class="`alert alert-${notify.cls}`" role="alert">{{ notify.message }}</div>
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please insert your email:</h1>

            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive } from "vue"

const email = ref('')
const notify = reactive({
    cls: '',
    message: ''
})

const submit = async () => {
    try {
        await axios.post('forgot', {
            email: email.value
        })

        notify.cls = 'success'
        notify.message = 'Email was sent'
    } catch (e) {
        notify.cls = 'danger'
        notify.message = 'Email does not exist'
    }

}
</script>