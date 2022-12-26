<script setup>
import axios from 'axios';
</script>

<template>
    <h1>Willkommen, {{ username }}</h1>
    
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
        authenticated() {
            return this.$store.state.user.isLoggedIn;
        },
        username() {
            return this.$store.state.user.name;
        },
        getGuid() {
            return this.$store.state.user.guid;
        }
    },
};

</script>