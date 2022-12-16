<script setup>
import File from './File.vue';
</script>

<template>
    <div>
        <h3>
            {{ newsCount }} von {{ newsItems.length }} Files.&nbsp;
            <button @click="newsCount++">more</button>&nbsp;
            <button @click="newsCount--">less</button>
            <br>
            <br>

        </h3>
        <div class="newsImages">
            <template v-if="newsItems.length">
                <File
                    v-for="item in displayNews"
                    v-bind:key="item.id"
                    :id="item.id"
                    :name="item.name"
                    :path="item.path"
                ></File>
                
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsCount: 3,
            newsItems: [],
        };
    },
    computed: {
        displayNews: function () {
            return this.newsItems.slice(0, this.newsCount);
        },
    },
    mounted: async function () {
        try {
            const res = await fetch('https://localhost:5001/api/files');
            if (!res.ok) {
                alert('Problem beim Laden der Daten.');
            }
            this.newsItems = await res.json();
            this.count = 10;
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