<script setup>
import axios from "axios";
import FilePanel from "../components/FilePanel.vue";
</script>

<template>
  <div>
    <div class="welcome">Willkommen, {{ username }}</div>
    <div class="text-center"><button id="eric" href="javascript:void(0)" v-on:click="deleteToken()">Abmelden</button></div>
    <div class="filesText">Welches File wollen Sie heute bearbeiten?</div>
    <FilePanel></FilePanel>
  </div>
  <div class="footer-dark">
    <footer id="amin" class="text-center text-white">
      <br>
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
  computed: {
    username() {
      return this.$store.state.user.username;
    },
  },
  methods: {
    deleteToken() {
      delete axios.defaults.headers.common["Authorization"];
      this.$store.commit("authenticate", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style>


#eric:hover {
    color: #1f6032;
}

#eric {
    background-color: #4caf4f00;
    border: 0px !important;
    color: white;
}

#amin {
  position: fixed !important;
  bottom: 0;
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

.welcome {
  font-size: 2em;
  margin-top: 8%;
  text-align: center;
}

.filesText {
  font-size: 1.5em;
  margin-top: 8%;
  margin-bottom: 1.5%;
  text-align: center;
}
</style>
