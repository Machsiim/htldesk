<script setup>
import FilePanel from "../components/FilePanel.vue";
</script>

<template>
  <main>
  <div class="home">
    <h1 class="text-center">Willkommen auf unserer Webapllikation</h1>
    
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src="./projekt1.png" alt="rover" />
    </div>
    <div class="card-body">
      
      <h4>
        Webapllikation
      </h4>
      <p>
        An exploration into the truck's polarising design
      </p>
      
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src="./Projekt2.webp" alt="ballons" />
    </div>
    <div class="card-body">
      
      <h4>
        Datei exportieren
      </h4>
      <p>
        Sie haben die Möglichkeit Dateien zu exportieren.
      </p>
      
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src="./Projekt3.jpg" alt="city" />
    </div>
    <div class="card-body">
      
      <h4>
        Datei importieren
      </h4>
      <p>
        Sie haben die Möglichkeit Dateien zu importieren.
      </p>
      
    </div>
  </div>
</div>
</div>
  

  </main>
  </template>

  <style>
   @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}
.container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
    </style>