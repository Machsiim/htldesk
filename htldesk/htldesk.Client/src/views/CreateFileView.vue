<script setup>
import axios from 'axios';
</script>
 
<template>
    <div class="createAccount">
        <h3>Neues File</h3>
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
            axios.post('https://localhost:5001/api/files/create', {
                name: document.getElementById('fortnite').value,
                userGuid: this.$store.state.user.guid 
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