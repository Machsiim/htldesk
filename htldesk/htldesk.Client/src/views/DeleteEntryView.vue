<script setup>
import { createBlockStatement } from '@vue/compiler-core';
import axios from 'axios';
import { onMounted } from 'vue';
</script>

<template>
    <div>
        <h3>Buchung löschen</h3>
        <div class="select">
            <select id="fortnite">
                <option v-for="a in accounts" v-bind:key="a.guid">
                    {{ a.name }}
                </option>
            </select>
            <button v-on:click="deleteAccount()"></button>
        </div>
    </div>
    
</template>

<script>
export default {

    props: {
        entries: [],
    },

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
        deleteAccount() {
            axios.delete('https://localhost:5001/api/accountingaccounts/' + this.getAccountGuid(document.getElementById('fortnite').value), {
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
        getAccountGuid(name) {
            for (let i = 0; i < this.accounts.length; i++) {
                if (this.accounts[i].name === name) {
                    return this.accounts[i].guid;
                }
            }
        }
    },

}

</script>

<style>
.select {
    margin: 0 auto;
    width: 50%;
    text-align: center;
}
</style>