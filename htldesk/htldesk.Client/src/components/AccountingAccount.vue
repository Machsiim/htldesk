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
                <td></td>
                <td>
                    <button v-on:click="deleteEntry(e.guid)">Löschen</button>
                </td>
                <td>
                    <button v-on:click="editEntry(e.guid)">Bearbeiten</button>
                </td>
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
        };
    },
    mounted: async function () {
        this.entries = (await axios.get("https://localhost:5001/api/entries/" + this.guid)).data;
    },
    methods: {
        deleteEntry(guid) {
            axios.delete("https://localhost:5001/api/entries/" + guid)
                .then(response => {
                    this.message = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            this.$router.push('/dashboard');
        },
        editEntry(guid) {
            this.$router.push('/change/entry/' + guid);
        }
    }
};
</script>
