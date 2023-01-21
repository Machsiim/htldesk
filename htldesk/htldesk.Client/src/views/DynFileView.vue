<script setup>
import AccountingAccount from '../components/AccountingAccount.vue';
import File from '../components/File.vue'
</script>


<template>
    <div>
        <br>
        <br>
        <br>
        <div class="buttons">
            <RouterLink to="/create" class="nav-link">Create</RouterLink>
            <RouterLink to="/change" class="nav-link">Change</RouterLink>
            <RouterLink to="/delete" class="nav-link">Delete</RouterLink>
        </div>
        <div v-for="a in accounts" v-bind:key="a.guid">
            <AccountingAccount v-bind:guid="a.guid" v-bind:name="a.name"></AccountingAccount>
            <div>
                <RouterLink v-bind:to="`/create/${a.guid}`" class="nav-link">Create</RouterLink>
                <RouterLink v-bind:to="`/change/${a.guid}`" class="nav-link">Change</RouterLink>
                <RouterLink v-bind:to="`/delete/${a.guid}`" class="nav-link">Delete</RouterLink>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: this.$route.params.filename,
            accounts: [],
        };
    },
    methods: {
        returnFilename() {
            return this.$route.params.filename;
        },

        async create() {
            console.log("create");
        },

        async change() {
            console.log("change");
            async
        },

        async remove() {
            console.log("remove");
        },
    },
    mounted: async function () {
        try {
            const res = await fetch('https://localhost:5001/api/accountingaccounts/' + this.$store.state.file.guid);
            if (!res.ok) {
                alert('Problem beim Laden der Daten.');
            }

            res.json().then((data) => {
                this.accounts = data;
            })

        } catch (e) {
            alert('Der Server ist nicht erreichbar.');
        }
    },

    components: { AccountingAccount }
};
</script>

<style>
.buttons {
    text-align: center;
}
</style>