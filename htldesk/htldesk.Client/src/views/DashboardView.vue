<script setup>
import axios from 'axios';
import FilePanel from '../components/FilePanel.vue';
</script>


<template>
    <div>
        <div class="welcome">Sie sind jetzt als "{{ username }}" eingeloggt</div>
        <FilePanel></FilePanel>
    </div>
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
            return this.$store.state.user.username;
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

.filesText {
    font-size: 1.5em;
    margin-top: 8%;
    margin-bottom: 1.5%;
    text-align: center;
}
</style>