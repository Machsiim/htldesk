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
        class="index-module--column--0SNFs index-module--columnRoot--F186F index-module--xs6--nt2if index-module--l8--rucaF index-module--lStart3--E5tlK"
      >
        <h2 class="hx">Ganz leicht arbeiten</h2>
        <p class="pl">
          Erstellen Sie sich ein Konto und fangen Sie sofort an zu arbeiten. Es
          vereinfacht Ihnen die Arbeit und ist sehr empfehlend für Schüler.
        </p>
      </div>
    </div>
    <br>
    <div class="footer-dark">
    <footer class="text-center text-white">
      <br>
      <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Seiten</h3>
              <ul>
                <li>
                  <RouterLink to="/" class="footer-link">Home</RouterLink>
                </li>
                <li>
                  <RouterLink to="/login" class="footer-link">Login</RouterLink>
                </li>
                <li>
                  <RouterLink to="/register" class="footer-link"
                    >Register</RouterLink
                  >
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <RouterLink to="/about" class="footer-link">Firma</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" class="footer-link">Team</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" class="footer-link"
                    >Karriere</RouterLink
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>InParis</h3>
              <p>
                Die Webapllikation bietet Hilfe an für Schüler oder auch Lehrer.
                Arbeiten Sie ganz leicht mit unsere Tools
              </p>
            </div>
          </div>
          <p class="copyright">InParis © 2023</p>
        </div>
    </footer>
  </div>
  </main>
</template>

<style>

footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: black;
}


.footer-dark {
    flex-direction: column;
    justify-content: flex-end;
}


.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-link:hover {
  color: blue;
  text-decoration: none;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
h1 {
  color: white;
}
body {
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #10182f;
  padding-top: 20px;
  background-color: darkgreen;
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
