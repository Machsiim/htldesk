<script setup>
import FilePanel from "../components/FilePanel.vue";
</script>

<template>
  <main>
    <div class="home">
      <h1 class="text-center">Willkommen auf unserer Webapplikation</h1>



      <div class="container">
        <div class="card">
          <div class="card-header">
            <img src="./projekt1.png" alt="rover" />
          </div>
          <div class="card-body">
            <h4>Anmelden & Registrieren</h4>
            <p>
              Erstellen Sie sich einen Konto um einfach auf unserer Website zu
              arbeiten.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="./Projekt2.webp" alt="ballons" />
          </div>
          <div class="card-body">
            <h4>Leicht arbeiten</h4>
            <p>
              Mit unserer Webapplikation haben Sie die Möglichkeit leicht zu
              arbeiten.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="./Projekt3.jpg" alt="city" />
          </div>
          <div class="card-body">
            <h4>Datei exportieren</h4>
            <p>
              Nachdem Sie fertig sind haben Sie die Möglichkeit Dateien zu
              exportieren
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          index-module--column--0SNFs
          index-module--columnRoot--F186F
          index-module--xs6--nt2if
          index-module--l8--rucaF
          index-module--lStart3--E5tlK
        "
      >
        <h2 class="hx">Ganz leicht arbeiten</h2>
        <p class="pl">
          Erstellen Sie sich ein Konto und fangen Sie sofort an zu arbeiten. Es
          vereinfacht Ihnen die Arbeit und ist sehr empfehlend für Schüler.
        </p>
      </div>
    </div>

  </main>
</template>

  <style>
h1 {
  color: white;
}
body {
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #10182f;
  padding-top: 20px;
  background-color: darkgreen;
  min-width: fit-content;
}

.container {
  display: flex;

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
.card:hover {
  background-color: rgba(255, 242, 242, 0.8);
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
  color: black;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}

.index-module--column--0SNFs {
  text-align: center;
  color: white;
  margin-top: 20px;
}

.index-module--columnRoot--F186F {
  grid-column-start: auto;
}


</style>

