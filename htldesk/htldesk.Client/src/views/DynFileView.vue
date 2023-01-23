<script setup>
import AccountingAccount from '../components/AccountingAccount.vue';
import File from '../components/File.vue'
</script>


<template>
  <div>
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
        </div>
      </div>
    </div>
    <div class="footer-dark">
      <footer class="text-center text-white" id="dashaev">
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
                  <RouterLink to="/register" class="footer-link">Register</RouterLink>
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
                  <RouterLink to="/about" class="footer-link">Karriere</RouterLink>
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
#dashaev {
  position: fixed;
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
</style>