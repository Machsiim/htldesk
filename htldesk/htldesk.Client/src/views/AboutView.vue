<template>
  <div class="about">
    <h1 class="">InParis</h1>
    <main>
      <p>
        Die Webapplikation hilft Schülern leichter zu arbeiten und einen
        Übersicht zu haben. Die Applikation wurde von 5 Schülern <br> der Schule Htl
        Spengergasse in Wien 1050 Österreich.
      </p>
    </main>
    <div class="footer-dark">
    <footer class="text-center text-white" id="foot_about">
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
  </div>
</template>

<style scoped>


#foot_about {
  position: fixed;
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

h3 {
  margin: 0;
}


</style>
