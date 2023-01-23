<script setup>
import { createBlockStatement } from '@vue/compiler-core';
import axios from 'axios';
import { onMounted } from 'vue';
import router from '../router';
</script>

<template>
    <div class="createAccount">
        <h3>Neue Buchung</h3>
        <div class="form">
            <div class="form-row">
                <div class="label">Datum</div>
                <div class="control">
                    <input id="datum" type="text" v-model="datum" />
                </div>
            </div>
        </div>
        <div class="form">
            <div class="form-row">
                <div class="label">Gegenkonto</div>
                <div class="control">
                    <input id="gegenkonto" type="text" v-model="gegenkonto" />
                </div>
            </div>
        </div>
        <div class="form">
            <div class="form-row">
                <div class="label">Soll</div>
                <div class="control">
                    <input id="soll" type="text" v-model="soll" />
                </div>
            </div>
        </div>
        <div class="form">
            <div class="form-row">
                <div class="label">Haben</div>
                <div class="control">
                    <input id="haben" type="text" v-model="haben" />
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
            axios.post('https://localhost:5001/api/entries/create', {
                datum: new Date(document.getElementById('datum').value),
                gegenkonto: document.getElementById('gegenkonto').value,
                soll: document.getElementById('soll').value,
                haben: document.getElementById('haben').value,
                accountingAccountGuid: this.getAccountGuid()
            })
                .then(response => {
                    this.message = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            this.$router.push('/dashboard');
            console.log(this.getAccountGuid());
        },
        getAccountGuid() {
            return this.$route.params.accountGuid;
        }
    },

};

</script>

<style>
.select {
    margin: 0 auto;
    width: 50%;
    text-align: center;
}
</style>