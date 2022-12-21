<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/register"><Button>Regstrieren</Button> </RouterLink>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

input[type="submit"] {
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
</style>
