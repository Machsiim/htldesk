<template>
  <div>
    <header>
      <div class="wrapper">
        <br />
        <nav>
          <div class="lll">
            <div class="navl" id="navl">
              <ul class="nav__links">
                <i class="fa fa-times" id="close" v-on:click="closeMenue()"></i>
                <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
                <li>
                  <div>
                    <RouterLink to="/about" class="nav-link">About</RouterLink>
                  </div>
                </li>
                <li>
                  <RouterLink to="/login" class="nav-link">Login</RouterLink>
                </li>
                <li>
                  <div v-if="authenticated">
                    <RouterLink to="/login" class="nav-link">Profil</RouterLink>
                  </div>
                </li>
                <li>
                  <div v-if="!authenticated">
                    <RouterLink to="/register" class="nav-link"
                      ><Button id="register_button"
                        >Register</Button
                      ></RouterLink
                    >
                  </div>
                </li>
                <li>
                  <div v-if="authenticated">
                    <RouterLink to="/dashboard" class="nav-link"
                      >Dashboard</RouterLink
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <i class="fa fa-bars" id="open" v-on:click="openMenue()"></i>
        </nav>

        <br />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script>
export default {
  computed: {
    authenticated() {
      return this.$store.state.user.isLoggedIn;
    },
  },
  methods: {
    openMenue() {
      document.getElementById("navl").style.right = "0";
    },
    closeMenue() {
      document.getElementById("navl").style.right = "-200px";
    },
  },
};
</script>

<style>
nav {
  align-items: center !important	;
}
.navl {
  list-style: none !important;
}
.navl li {
  display: inline-block;
  margin: 0 20px;
}
.navl ul li a:hover {
  color: #0088a9 !important;
}
.navl ul li a {
  transition: all 0.3s ease 0s;
}
nav .fa {
  display: none;
}

@media (max-width: 768px) {
  .nav__links li {
    display: block !important;
    margin: 50px 0 !important;
    line-height: 30px !important;
  }
  .navl {
    position: fixed !important;
    background: midnightblue !important;
    height: 100% !important;
    width: 200px !important;
    top: 0 !important;
    right: -200px;
    text-align: center !important;
    z-index: 92343918 !important;
    transition: 1s;
    overflow-y: hidden !important;
  }
  #close,
  #open {
    display: block !important;
    color: #fff !important;
    margin: 10px;
    font-size: 36px !important;
    cursor: pointer;
    size: 130% !important;
  }
}

footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fff;
  padding: 20px;
  text-align: center;
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

header {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 30px 10% !important;
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

input[type="submit"],
#submitbtn {
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
