<template>
  <div>
    <header>

      <div class="wrapper">
        <br />

        <nav class="d-flex">
          <div>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </div>
          <div>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </div>
          <div v-if="!authenticated">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </div>
          <div v-if="authenticated">
            <RouterLink to="/login" class="nav-link">Profil</RouterLink>
          </div>
          <div v-if="!authenticated">
            <RouterLink to="/register" class="nav-link"><Button id="register_button">Register</Button></RouterLink>
          </div>
          <div v-if="authenticated">
            <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
          </div>
        </nav>
        <br />
      </div>
    </header>

    <RouterView />
    <footer class="text-center text-white" style="background-color: black">
      <div class="container p-4 pb-0">
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3 mr-3">Registrieren Sie sich kostenlos! </span>
            <button type="button" class="btn btn-outline-light btn-rounded">
              Registrieren!
            </button>
          </p>
        </section>
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3 mr-3">Melden Sie sich an </span>
            <button type="button" class="btn btn-outline-light btn-rounded">
              Anmelden!
            </button>
          </p>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    authenticated() {
      return this.$store.state.user.isLoggedIn;
    },
  },
};
</script>

<style>
footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fff;
  padding: 20px;
  text-align: center;
}

/* Add this style to the parent element */
#appContainer {
  position: relative;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #1f6032 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white !important;
  position: relative;
}

#appContainer {
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  width: 100%;
  display: flex;

}

#header {
  display: flex;
  align-items: center;
  flex: 0 0 4em;
}

#main {
  flex-grow: 1;
}

nav {
  color: red;
}

nav h1 {
  margin: 0;
}

nav a {
  text-decoration: none;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

form {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

#reg_form {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}

.error {
  color: red !important;
}

nav {
  display: flex;
}


nav .nav-link,
nav #register_button {
  color: white;
  text-decoration: none;
  font-size: 23px !important;
  transition: all ease 0.3s;
}

nav a:hover {
  color: #0088a9;
}

.nav-link:hover {
  color: #0088a9 !important;
}

#register_button {
  background-color: #0088a9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}

#register_button:hover {
  background-color: #00738a;
}
</style>
