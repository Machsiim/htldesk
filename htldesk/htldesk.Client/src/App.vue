
<template>
  <header>
    

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/about">About</RouterLink></div>
        <div><RouterLink to="/login">Login</RouterLink></div>
        <div><RouterLink to="/register">Register</RouterLink></div>
        <div v-if="authenticated">
          <RouterLink to="/dashboard">Dashboard</RouterLink>
        </div>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  computed: {
    authenticated() { return this.$store.state.user.isLoggedIn; }

  }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: beige;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#appContainer {
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
}
#header {
    flex: 0 0 4em;
}
#main {
    flex-grow: 1;
}
nav {
    display: flex;
    align-items: center;
    gap: 1em;
}
nav h1 {
    margin: 0;
}
nav a {
    text-decoration: none;    
}

</style>