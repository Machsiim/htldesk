<script setup>
import axios from 'axios';
</script>

<template>
    <div>
      <form @submit.prevent="register">
        <label>
          Email:
          <input v-model="email" type="email" required />
        </label>
        <br>
        <label>
          Username:
          <input v-model="username" type="username" required />
        </label>
        <br />
        <label>
          Password:
          <input v-model="password" type="password" required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input v-model="passwordConfirmation" type="password" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
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
  </script>