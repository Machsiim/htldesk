<script setup>
import { createBlockStatement } from '@vue/compiler-core';
import axios from 'axios';
import { onMounted } from 'vue';
</script>

<template>
    <div>
        <h3>Konto ändern</h3>
        <div class="select">
            <select id="fortnite">
                <option v-for="a in accounts" v-bind:key="a.guid">
                    {{ a.name }}
                </option>
            </select>
        </div>
        <div>
            <input type="text" id="newName" placeholder="Neuer Name">
            <button v-on:click="changeAccount()">Ändern</button>
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

    async mounted() {
        const response = await axios.get('https://localhost:5001/api/accountingaccounts/' + this.$store.state.file.guid);
        console.log(this.$store.state.file.guid)
        this.accounts = response.data;
        console.log(this.accounts)
    },
    methods: {
        changeAccount() {
            axios.put('https://localhost:5001/api/accountingaccounts/' + this.getAccountGuid(document.getElementById('fortnite').value), {
                name: document.getElementById('newName').value,
                fileGuid: this.$store.state.file.guid,
            })
                .then(response => {
                    this.message = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            this.$router.push('/dashboard');
        },
        getAccountGuid(name) {
            for (let i = 0; i < this.accounts.length; i++) {
                if (this.accounts[i].name === name) {
                    return this.accounts[i].guid;
                }
            }
        }
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