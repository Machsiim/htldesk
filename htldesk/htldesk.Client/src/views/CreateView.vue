<script setup>
import { createBlockStatement } from "@vue/compiler-core";
import axios from "axios";
import { onMounted } from "vue";
import router from "../router";
</script>

<template>
  <div class="createAccount">
    <center><h3>Neuer Account</h3></center>
    <div class="form">
      <div class="form-row">
        <div class="control">
          <input id="fortnite" placeholder="Name" type="text" v-model="name" />
        </div>
      </div>

      <div class="form-row">
        <div class="control">
          <input type="submit" v-on:click="sendData()" Senden />
          <div v-if="message">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    sendData() {
      axios
        .post("https://localhost:5001/api/accountingaccounts/create", {
          name: document.getElementById("fortnite").value,
          fileGuid: this.$store.state.file.guid,
        })
        .then((response) => {
          this.message = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style>
.select {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.createAccount {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.label {
  width: 30%;
  text-align: left;
  font-weight: bold;
}

.control {
  width: 70% !important;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.message {
  margin-top: 10px;
  font-weight: bold;
  color: green;
}
</style>
