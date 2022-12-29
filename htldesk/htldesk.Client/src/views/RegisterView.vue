´´´
<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />

  <div class="register">
    <h1 id="reg_form">Registration Form</h1>
    <form>
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
        <input type="password" id="password" name="password" />
        <i class="fa fa-eye eye-icon" id="eye_icon"></i>
      </div>
      <br />

      <small class="error"></small>
      <hr />
      <label for="password2">Confirm Password:</label>
      <input type="password" id="password2" name="password2" />
      <br />
      <small class="error"></small>
      <hr />
      <input type="submit" value="Submit" />

      <p id="success"></p>
    </form>
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

  // Then, create a function to toggle the visibility of the password
  function togglePasswordVisibility() {
    // Get the password input field
    const password = document.querySelector("#password");

    // Check if the password field is currently set to "password" type
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
  }

  // Add an event listener to the eye icon to toggle the password visibility when clicked
  eyeIcon.addEventListener("click", (e) => togglePasswordVisibility());

  // Finally, append the eye icon to the page, next to the password input field
  const passwordInputContainer = document.querySelector("#password-container");

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
        await axios.post("https://localhost:5001/api/users/register", {
          email: this.email,
          username: this.username,
          password: this.password,
        });
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
        // Display an error message to the user
        this.errorMessage = "Error creating user";
      }
    },
  },
};
</script>

<style>
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
```
