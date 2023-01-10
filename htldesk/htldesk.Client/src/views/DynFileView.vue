<script setup>
import File from '../components/File.vue'
</script>

returnFilename

<template>
    <div>
        <br>
        <br>
        <br>
        <File v-bind:name=$route.params.filename ></File>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: this.$route.params.filename
        };
    },
    methods: {
        returnFilename() {
            console.log(this.$route.params.filename)
            return this.$route.params.filename;
        }
    }
};
</script>