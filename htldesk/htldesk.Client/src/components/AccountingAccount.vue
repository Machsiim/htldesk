<script setup>
import axios from "axios";
</script>

<template>
    <div class="accounts">
        <br>
        <br>
        <div>Konto: {{ this.name }}</div>
        <br>
        <div v-for="a in entries" v-bind:key="a.guid">
            <div>Datum: {{ a.datum }}</div>
            <div>Gegenkonto: {{ a.gegenKonto }}</div>
            <div>Soll: {{ a.soll }}</div>
            <div>Haben: {{ a.haben }}</div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            entries: [],
            entrieCount: 0,
            name: "2800",
            guid: "08daf341-a2c3-4020-8154-4a29c41300b7", // To be changed later on
        };
    },
    mounted: async function () {
        this.entrieCount = (await axios.get("https://localhost:5001/api/entries/count/" + this.guid)).data;
        this.entries = (await axios.get("https://localhost:5001/api/entries/" + this.guid)).data;
    },
};
</script>
