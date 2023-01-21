<script setup>
import axios from "axios";
</script>

<template>
    <div class="accounts">
        <br>
        <br>
        <div>{{ this.name }}</div>
        <table>
            <tr>
                <th>Datum</th>
                <th>Gegenkonto</th>
                <th>Soll</th>
                <th>Haben</th>
            </tr>


            <tr v-for="e in this.entries" v-bind:key=e.guid>
                <td>{{ e.datum }}</td>
                <td>{{ e.gegenKonto }}</td>
                <td>{{ e.soll }}</td>
                <td>{{ e.haben }}</td>
                <br>
            </tr>
        </table>
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
    },
};
</script>
