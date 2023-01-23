<script setup>
import File from './File.vue';
</script>

<template>
    <div class="files">
        <div v-for="f in fileNames" v-bind:key="f.guid">
            <RouterLink v-on:click="this.$store.commit('changeFile', f.guid, f.name)" v-bind:to="`/files/${Username}/${f.name}`">{{ f.name }}</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Username: this.$store.state.user.username,
            fileNames:[],
        };
    },
    computed: {
        displayNews: function () {
            return this.newsItems.slice(0, this.newsCount);
        },
    },
    mounted: async function () {
        try {
            const res = await fetch('https://localhost:5001/api/files/' + this.$store.state.user.username);
            if (!res.ok) {
                alert('Problem beim Laden der Daten.');
            }

            res.json().then((data) => {
                this.fileNames = data;
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

.files {
    display: flex;
    gap: 13rem;
    justify-content: center;
    align-items: center;
}

.fileName {
    font-size: 2em;
    text-align: center;
}


</style>