
<template>
  <header>
    

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

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