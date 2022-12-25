<script setup>
import axios from 'axios';
import FilePanel from '../components/FilePanel.vue';
</script>


<template>
    <div class="welcome">Willkommen, {{ username }}</div>
</template>

<script>
    export default {
    data() {
        return {
            model: {
                username: '',
                password: '',
            },
        };
    },
    computed: {
        username() {
            return this.$store.state.user.name;
        },
        getGuid() {
            return this.$store.state.user.guid;
        }
    },
};

</script>

<style>
    .welcome {
        font-size: 2em;
        margin-top: 8%;
        text-align: center;
    }
</style>