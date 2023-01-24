<script setup>
import { createBlockStatement } from "@vue/compiler-core";
import axios from "axios";
import { onMounted } from "vue";
import router from "../router";
</script>

<template>
  <div class="createAccount">
    <div class="form">
      <div class="form-row">
        <div class="label"></div>
        <div class="control">
          <center><h3>Neue Buchung</h3></center>
        </div>
      </div>
    </div>

    <div class="form">
      <div class="form-row">
        <div class="label">Datum</div>
        <div class="control">
          <input id="datum" placeholder="Datum" type="text" v-model="datum" />
        </div>
      </div>
    </div>
    <div class="form">
      <div class="form-row">
        <div class="label">Gegenkonto</div>
        <div class="control">
          <input
            id="gegenkonto"
            placeholder="Gegenkonto"
            type="text"
            v-model="gegenkonto"
          />
        </div>
      </div>
    </div>
    <div class="form">
      <div class="form-row">
        <div class="label">Soll</div>
        <div class="control">
          <input id="soll" placeholder="Soll" type="text" v-model="soll" />
        </div>
      </div>
    </div>
    <div class="form">
      <div class="form-row">
        <div class="label">Haben</div>
        <div class="control">
          <input id="haben" type="text" placeholder="Haben" v-model="haben" />
        </div>
      </div>
    </div>
    <div class="form">
      <div class="form-row">
        <div class="label"></div>
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
        .post("https://localhost:5001/api/entries/create", {
          datum: new Date(document.getElementById("datum").value),
          gegenkonto: document.getElementById("gegenkonto").value,
          soll: document.getElementById("soll").value,
          haben: document.getElementById("haben").value,
          accountingAccountGuid: this.getAccountGuid(),
        })
        .then((response) => {
          this.message = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/dashboard");
      console.log(this.getAccountGuid());
    },
    getAccountGuid() {
      return this.$route.params.accountGuid;
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
select {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  /* Add some font and color styles */
  font-size: 16px;
  color: #555;
}

/* Add a hover effect to the options */
option:hover {
  background-color: #f5f5f5;
}

/* Add a custom arrow to the select element */
select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px 10px;
  background-color: #fff;
  pointer-events: none;
}
</style>
