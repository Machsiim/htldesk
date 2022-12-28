<script setup>
import File from './File.vue';
</script>

<template>
    <div class="files">
        <div class="fileName"><a :href="'/files' + '/' + Username + '/' + FileName1">{{ FileName1 }}</a></div>
        <div class="fileName"><a :href="'/files' + '/' + Username + '/' + FileName2">{{ FileName2 }}</a></div>
        <div class="fileName"><a :href="'/files' + '/' + Username + '/' + FileName3">{{ FileName3 }}</a></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Username: this.$store.state.user.username,

            FileName1: 'Hier sollte was sein',
            FileName2: 'Hier sollte was sein',
            FileName3: 'Hier sollte was sein',
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
                this.FileName1 = data[0].name;
                this.FileName2 = data[1].name;
                this.FileName3 = "LenzFile";
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