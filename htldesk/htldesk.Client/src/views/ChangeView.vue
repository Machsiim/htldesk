<script setup>
import axios from 'axios';
</script>

<template>
    <div>
        <select>
            <option v-for="file in files" v-bind:key="file.guid">
                {{ file.name }}
            </option>
        </select>
    </div>
</template>

<script>

</script>