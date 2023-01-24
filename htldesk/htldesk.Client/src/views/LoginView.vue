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
        <div class="container-fluid">
          <h1>Willkommen, {{ username }}</h1>
          Angemeldet als {{ username }}
          <a href="javascript:void(0)" v-on:click="deleteToken()">Abmelden</a>
        </div>
      </template>
    </form>
    <div class="footer-dark">
      <footer class="text-center text-white" id="maxim">
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Seiten</h3>
              <ul>
                <li>
                  <RouterLink to="/" class="footer-link">Home</RouterLink>
                </li>
                <li>
                  <RouterLink to="/login" class="footer-link">Login</RouterLink>
                </li>
                <li>
                  <RouterLink to="/register" class="footer-link"
                    >Register</RouterLink
                  >
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <RouterLink to="/about" class="footer-link">Firma</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" class="footer-link">Team</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" class="footer-link"
                    >Karriere</RouterLink
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>InParis</h3>
              <p>
                Die Webapllikation bietet Hilfe an für Schüler oder auch Lehrer.
                Arbeiten Sie ganz leicht mit unsere Tools
              </p>
            </div>
          </div>
          <p class="copyright">InParis © 2023</p>
        </div>
      </footer>
    </div>
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

<style>
h1 {
  text-align: left !important;
}

#maxim {
  bottom: 0;
  position: absolute !important;
  width: 100%;
  background-color: black;
}

.footer-dark {
  flex-direction: column;
  justify-content: flex-end;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-link:hover {
  color: blue;
  text-decoration: none;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
