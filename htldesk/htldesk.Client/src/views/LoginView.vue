<template>
    <div>
      <form @submit.prevent="login">
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
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
   <script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        deleteToken() {
            delete axios.defaults.headers.common['Authorization'];
            this.$store.commit('authenticate', null);
        },
        async sendLoginData() {
            try {
                const userdata = (await axios.post('api/users/login', this.model)).data;
                console.log(userdata);
                axios.defaults.headers.common['Authorization'] = `Bearer ${userdata.token}`;
                this.$store.commit('authenticate', userdata);
            } catch (e) {
                if (e.response.status == 401) {
                    alert('Login failed. Invalid credentials.');
                }
            }
        },
    },
    computed: {
        authenticated() {
            return this.$store.state.user.isLoggedIn;
        },
        username() {
            return this.$store.state.user.name;
        }
    },
};
</script>