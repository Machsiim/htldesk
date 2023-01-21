<script setup>
import { createBlockStatement } from '@vue/compiler-core';
import axios from 'axios';
import { onMounted } from 'vue';
</script>

<template>
    <div>
        <h3>Konto ändern</h3>
        <div class="select">
            <select>
                <option v-for="a in accounts" v-bind:key="a.guid">
                    {{ a.name }}
                </option>
            </select>
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