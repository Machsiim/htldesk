<script setup>
import axios from "axios";
</script>

<template>
    <div class="accounts">
        <br>
        <br>
        <div>Konto: {{ this.name }}</div>
        <br>
        <div v-for="e in this.entries" v-bind:key=e.guid>
            <div>Datum: {{ e.datum }}</div>
            <div>Gegenkonto: {{ e.gegenKonto }}</div>
            <div>Soll: {{ e.soll }}</div>
            <div>Haben: {{ e.haben }}</div>
            <br>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        guid: String,
        name: String,
    },

    data() {
        return {
            entries: [],
            entrieCount: 0,
        };
    },
    mounted: async function () {
        //this.entrieCount = (await axios.get("https://localhost:5001/api/entries/count/" + this.guid)).data;
        this.entries = (await axios.get("https://localhost:5001/api/entries/" + this.guid)).data;
        console.log(this.entries)
    },
};
</script>
