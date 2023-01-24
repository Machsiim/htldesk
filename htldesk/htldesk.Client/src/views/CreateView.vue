<script setup>
import { createBlockStatement } from '@vue/compiler-core';
import axios from 'axios';
import { onMounted } from 'vue';
import router from '../router';
</script>

<template>
    <div class="createAccount">
        <h3>Neuer Account</h3>
        <div class="form">
            <div class="form-row">
                <div class="label">Name</div>
                <div class="control">
                    <input id="fortnite" type="text" v-model="name" />
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="label"></div>
            <div class="control">
                <button type="submit" v-on:click="sendData()">Senden</button>
                <div v-if="message">{{ message }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accounts: [],
        }
    },
    methods: {
        sendData() {
            axios.post('https://localhost:5001/api/accountingaccounts/create', {
                name: document.getElementById('fortnite').value,
                fileGuid: this.$store.state.file.guid
            })
                .then(response => {
                    this.message = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
                this.$router.push('/dashboard');
        },
    }

}

</script>

<style>
.select {
    margin: 0 auto;
    width: 50%;
    text-align: center;
}
</style>