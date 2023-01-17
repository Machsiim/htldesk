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
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><RouterLink to="/about" class="footer-link">Web design</RouterLink></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><RouterLink to="/about" class="footer-link">Firma</RouterLink></li>
                            <li><RouterLink to="/about" class="footer-link">Team</RouterLink></li>
                            <li><RouterLink to="/about" class="footer-link">Karriere</RouterLink></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>InParis</h3>
                        <p>Die Webapllikation bietet Hilfe an für Schüler oder auch Lehrer. Arbeiten Sie ganz leicht mit unsere Tools </p>
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
  computed: {
    authenticated() {
      return this.$store.state.user.isLoggedIn;
    },
  },
};
</script>

<style>
<<<<<<< HEAD
.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
=======
footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fff;
  padding: 20px;
  text-align: center;
>>>>>>> ba23bd5b49877acb6d68c78c0a5b760fed948d9e
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}


.footer-dark ul routerlink {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
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
