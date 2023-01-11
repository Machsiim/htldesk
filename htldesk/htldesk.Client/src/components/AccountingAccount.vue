<script setup>
import axios from "axios";
</script>

<template>
    <div class="accounts">
        <div>
            {{ this.entrieCount }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            entrieCount: 0,
        };
    },
    mounted: async function () {
        this.entrieCount = (await axios.get("https://localhost:5001/api/accountingaccounts/count/" + this.$store.state.file.guid)).data;
        console.log(this.$store.state.file.guid)
        console.log(this.entrieCount);
    },
};
</script>
