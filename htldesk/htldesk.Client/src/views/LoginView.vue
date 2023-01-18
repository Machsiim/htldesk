<script setup>
import axios from "axios";
</script>

<template>
  <div class="loginForm">
    <form>
      <template v-if="!authenticated">
        <label>Username:</label>
        <input type="text" id="username" v-model="model.username" />
        <hr />
        <label>Password:</label>
        <input type="password" id="password" v-model="model.password" />
        <hr />
        <button type="button" id="submitbtn" v-on:click="sendLoginData">
          Submit
        </button>
        (Hint: Use lenz, Password 1111)
      </template>
      <template v-else>
        Angemeldet als {{ username }}
        <a href="javascript:void(0)" v-on:click="deleteToken()">Abmelden</a>
      </template>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    deleteToken() {
      delete axios.defaults.headers.common["Authorization"];
      this.$store.commit("authenticate", null);
    },
    async sendLoginData() {
      console.log("Sending login data");
      try {
        const userdata = (await axios.post("users/login", this.model)).data;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${userdata.token}`;
        this.$store.commit("authenticate", userdata);
        console.log("Login successful");
        this.$router.push("/dashboard");
      } catch (e) {
        if (e.response.status == 401) {
          alert("Login failed. Invalid credentials.");
        }
      }
    },
  },
  computed: {
    authenticated() {
      return this.$store.state.user.isLoggedIn;
    },
    username() {
      return this.$store.state.user.username;
    },
  },
};
</script>
