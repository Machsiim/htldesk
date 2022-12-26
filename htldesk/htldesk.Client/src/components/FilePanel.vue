<script setup>
import File from './File.vue';
</script>

<template>
    <h1>{{ FileName }}</h1>
</template>

<script>
export default {
    data() {
        return {
            FileName: 'Hier sollte was sein'
        };
    },
    computed: {
        displayNews: function () {
            return this.newsItems.slice(0, this.newsCount);
        },
    },
    mounted: async function () {
        try {
            const res = await fetch('https://localhost:5001/api/files/Lenz');
            if (!res.ok) {
                alert('Problem beim Laden der Daten.');
            }
            FileName = res.json().then((data) => {
                this.FileName = data;
            })
        } catch (e) {
            alert('Der Server ist nicht erreichbar.');
        }
    },
    methods: {
        incrementCounter: function (step) {
            this.count += step;
        },
    },
};
</script>

<style scoped>
.newsImages {
    display: flex;
    flex-wrap: wrap;
    gap: 13rem;
}
</style>