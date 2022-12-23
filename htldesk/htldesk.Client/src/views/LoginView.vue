<script setup>
import axios from 'axios';
</script>

<template>
    <div>
      <form @submit.prevent="login">
        <label>
           Username:
          <input v-model="email" type="username" required />
        </label>
        <br />
        <label>
          Password:
          <input v-model="password" type="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
  async login() {
    try {
      const response = await axios.post('/api/users/login', {
        username: this.username,
        password: this.password
      })
      const jwt = response.data.jwt
      // Save the JWT in local storage or a cookie
      localStorage.setItem('jwt', jwt)
      // Redirect the user to the dashboard or some other protected route
      this.$router.push('/dashboard')
    } catch (error) {
      console.error(error)
      // Display an error message to the user
      this.errorMessage = 'Invalid email or password'
    }
  }
}
  }
  </script>