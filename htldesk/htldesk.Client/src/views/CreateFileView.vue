<script setup>
import axios from "axios";
</script>

<template>
  <div class="createAccount">
    <h3>Neues File</h3>
    <div class="form">
      <div class="form-row">
        <div class="label">Name</div>
        <div class="control">
          <input id="fortnite" type="text" v-model="name" />
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="label"></div>
      <div class="control">
        <input type="submit" v-on:click="sendData()" Senden />
        <div v-if="message">{{ message }}</div>
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
        .post("https://localhost:5001/api/files/create", {
          name: document.getElementById("fortnite").value,
          userGuid: this.$store.state.user.guid,
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
