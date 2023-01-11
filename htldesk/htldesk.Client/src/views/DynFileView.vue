<script setup>
import AccountingAccount from '../components/AccountingAccount.vue';
import File from '../components/File.vue'
</script>


<template>
    <div>
        <br>
        <br>
        <br>
        <File v-bind:name=$route.params.filename ></File>
        <AccountingAccount v-bind:name="123"></AccountingAccount>
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
            console.log(this.$route.params.filename);
            return this.$route.params.filename;
        }
    },
    components: { AccountingAccount }
};
</script>