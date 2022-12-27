
<template>
  <div class="register">
    <h1 id="reg_form">Registration Form</h1>
    <form @submit.prevent="onSubmit">
  <label for="username">Username:</label>
  <input v-model="form.username" type="text" id="username" name="username" required>
  <br>
  
  <small class="error"></small>
  <hr>
  <label for="email">Email:</label>
  <input v-model="form.email" type="text" id="email" name="email" required>
  <br>
  
  <small class="error"></small>
  <hr>
  <label for="password">Password:</label>
  <input v-model="form.password" type="password" id="password" name="password" required>
  <br>
  
  <small class="error"></small>
  <hr>
  <input type="submit" value="Submit">
  
  <p id="success"></p>
</form> 
</div>
</template>

<script>
function validateForm() {
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorNodes = document.querySelectorAll('.error');
const success = document.getElementById('success');
clearErrors();


let errorFlag = false;
if(username.value.length < 3) {
  errorNodes[0].innerText = 'Username must be at least 3 characters long';
  username.classList.add('error-border');
  errorFlag = true;
  
  <script>
  export default {
    data() {
      return {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      }
    },
    methods: {
      async register() {
        if (this.password !== this.passwordConfirmation) {
          this.errorMessage = 'Passwords do not match'
          return
        }
        try {
          await axios.post('https://localhost:5001/api/users/register', {
            email: this.email,
            username: this.username,
            password: this.password
            
          })
          this.$router.push('/login')
        } catch (error) {
          console.error(error)
          // Display an error message to the user
          this.errorMessage = 'Error creating user'
        }
      }
    }
  }
},
methods: {
  onSubmit(event) {
    event.preventDefault();
    if(validateForm()) {
      
    
    // Submit the form
    axios.post('https://localhost:5001/api/users', {
      username: this.form.username,
      email: this.form.email,
      password: this.form.password
    }) .then(response => {
      console.log(response);

    })
    .catch(error => {
      console.log(error);
    });
  }
}
}
};
</script>
<style>
.error {
  color: red !important;
}
body, html {
  background-color: #1F6032 !important;
}
</style>
  
