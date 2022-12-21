
<template>
    <div class="register">
      <h1 id="reg_form">Registration Form</h1>
      <form @submit.prevent="onSubmit">
    <label for="username">Username:</label>
    <input v-model="form.username" type="text" id="username" name="username" required>
    <br>
    <small class="error"></small>
    <label for="email">Email:</label>
    <input v-model="form.email" type="text" id="email" name="email" required>
    <br>
    <small class="error"></small>
    <label for="password">Password:</label>
    <input v-model="form.password" type="password" id="password" name="password" required>
    <br>
    <small class="error"></small>
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
    
  }
  if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = 'Email is not valid';
    email.classList.add('error-border');
    errorFlag = true;
  }
  if(password.value.length < 8) {
    errorNodes[2].innerText = 'Password must be at least 8 characters long';
    password.classList.add('error-border');
    errorFlag = true;
  }
  return !errorFlag;
}
function clearErrors() {
  const errorNodes = document.querySelectorAll('.error');
  errorNodes.forEach(node => node.innerText = '');
  errorNodes.forEach(node => node.classList.remove('error-border'));
}
function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email);
}
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password:''
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
    
 