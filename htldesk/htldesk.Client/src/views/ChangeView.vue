<script setup>
import { createBlockStatement } from "@vue/compiler-core";
import axios from "axios";
import { onMounted } from "vue";
</script>

<template>
  <div>
    <center>
      <h3>Konto ändern</h3>
      <div class="form">
        <div class="form-row">
          <div class="control">
            <div class="select" id="fortnite">
              <select id="fortnite">
                <option v-for="a in accounts" v-bind:key="a.guid">
                  {{ a.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="form-row">
            <div class="control">
              <input id="newName" type="text" placeholder="Neuer Name" />
            </div>
          </div>
        </div>
        <div class="form">
          <div class="form-row">
            <div class="control">
              <center>
                <input
                  type="submit"
                  id="fortnite"
                  v-on:click="changeAccount()"
                  Ändern
                />
              </center>
            </div>
            <div v-if="message">{{ message }}</div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://localhost:5001/api/accountingaccounts/" +
        this.$store.state.file.guid
    );
    console.log(this.$store.state.file.guid);
    this.accounts = response.data;
    console.log(this.accounts);
  },
  methods: {
    changeAccount() {
      axios
        .put(
          "https://localhost:5001/api/accountingaccounts/" +
            this.getAccountGuid(document.getElementById("fortnite").value),
          {
            name: document.getElementById("newName").value,
            fileGuid: this.$store.state.file.guid,
          }
        )
        .then((response) => {
          this.message = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/dashboard");
    },
    getAccountGuid(name) {
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].name === name) {
          return this.accounts[i].guid;
        }
      }
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
/* Add some padding and a border */
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
