<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />

    <div class="register">
      <h1 id="reg_form">Registration Form</h1>
      <form v-on:submit.prevent="register">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />

        <small class="error"></small>
        <hr />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />

        <small class="error"></small>
        <hr />
        <label for="password">Password:</label>
        <div id="password-container">
          <input type="password" id="password" ref="password" name="password" />
          <i
            class="fa fa-eye eye-icon"
            id="eye_icon"
            ref="eye_icon"
            v-on:click="
              togglePasswordVisibility(this.$refs.password, this.$refs.eye_icon)
            "
          ></i>
        </div>
        <br />

        <small class="error"></small>
        <hr />
        <label for="password2">Confirm Password:</label>
        <input
          type="password"
          id="password2"
          ref="password2"
          name="password2"
        />
        <i
          class="fa fa-eye eye-icon"
          id="eye_icon2"
          ref="eye_icon2"
          v-on:click="
            togglePasswordVisibility(this.$refs.password2, this.$refs.eye_icon2)
          "
        ></i>
        <br />
        <small class="error"></small>
        <hr />
        <input type="submit" value="Submit" v-on:click="register" />

        <p id="success"></p>
      </form>
    </div>
    <div class="footer-dark">
      <footer class="text-center text-white" id="foot_register">
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
import axios from "axios";

function validateForm() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");
  const errorNodes = document.querySelectorAll(".error");
  const success = document.getElementById("success");

  const eyeIcon = document.querySelector("#eye_icon");

  clearErrors();

  let errorFlag = false;
  if (username.value.length < 3) {
    errorNodes[0].innerText = "Username must be at least 3 characters long";
    username.classList.add("error-border");
    errorFlag = true;
  }
  if (!testEmail(email.value)) {
    errorNodes[1].innerText = "Email is not valid";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (password.value.length < 4) {
    errorNodes[2].innerText = "Password must be at least 4 characters long";
    password.classList.add("error-border");
    errorFlag = true;
  }
  if (password2.value !== password.value) {
    errorNodes[3].innerText = "Passwords do not match";
    password2.classList.add("error-border");
    errorFlag = true;
  }

  function testEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function clearErrors() {
    errorNodes.forEach((node) => {
      node.innerText = "";
    });
    document.querySelectorAll(".error-border").forEach((node) => {
      node.classList.remove("error-border");
    });
  }
  return !errorFlag;
}

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    };
  },

  methods: {
    async register() {
      if (!validateForm()) {
        return;
      }
      try {
        console.log(document.getElementById("email").value);
        const userdata = (
          await axios.post("users/register", {
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
          })
        ).data;
        console.log(userdata);
        this.$router.push("/verification");
      } catch (error) {
        console.error(error);
        // Display an error message to the user
        this.errorMessage = "Error creating user";
      }
    },
    togglePasswordVisibility: function () {
      // Get the password input field
      const password = arguments[0];
      const eyeIcon = arguments[1];
      // console.log(password);

      // Check if the password field is currently set to "password" type
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye slash icon
      eyeIcon.classList.toggle("fa-eye-slash");
    },
    validateForm() {
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const password2 = document.getElementById("password2");
      const errorNodes = document.querySelectorAll(".error");
      const success = document.getElementById("success");

      const eyeIcon = document.querySelector("#eye_icon");

      clearErrors();

      let errorFlag = false;
      if (username.value.length < 3) {
        errorNodes[0].innerText = "Username must be at least 3 characters long";
        username.classList.add("error-border");
        errorFlag = true;
      }
      if (!testEmail(email.value)) {
        errorNodes[1].innerText = "Email is not valid";
        email.classList.add("error-border");
        errorFlag = true;
      }
      if (password.value.length < 4) {
        errorNodes[2].innerText = "Password must be at least 4 characters long";
        password.classList.add("error-border");
        errorFlag = true;
      }
      if (password2.value !== password.value) {
        errorNodes[3].innerText = "Passwords do not match";
        password2.classList.add("error-border");
        errorFlag = true;
      }

      function testEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
      }

      function clearErrors() {
        errorNodes.forEach((node) => {
          node.innerText = "";
        });
        document.querySelectorAll(".error-border").forEach((node) => {
          node.classList.remove("error-border");
        });
      }
      return !errorFlag;
    },
  },
};
</script>

<style>


#foot_register {
  position: relative;
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
.error {
  color: red !important;
}
body,
html {
  background-color: #1f6032 !important;
}
i.fa-eye {
  color: midnightblue;
  cursor: pointer;
  margin-left: -30px;
}
</style>
