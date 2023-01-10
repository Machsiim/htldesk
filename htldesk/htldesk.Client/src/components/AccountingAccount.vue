<script setup>
import axios from 'axios';
</script>

<template>
    
</template>

<script>
export default {
    props: {
        entrieCount: 0,
        fileGuid: Number
    },

    methods: {
        computed: {
            async getEntries () {
                axios.get('https://localhost:5001/api/entries/' + this.fileGuid)
                    .then(response => {
                        this.entrieCount = response.data.length;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
        }
    }

}
</script>
