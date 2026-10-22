const NOMBRE_DE_SIEGES = 20;
const PRIX = 80;
const CLE_STOCKAGE = "reservations";

let reservations = JSON.parse(localStorage.getItem(CLE_STOCKAGE)) || [];

const grille = document.getElementById("seat-grid");
const formulaireAjout = document.getElementById("booking-form");
const nomAjout = document.getElementById("booking-name");
const siegeAjout = document.getElementById("booking-seat");
const formulaireModification = document.getElementById("manage-form");
const passagerModification = document.getElementById("manage-passenger");
const nomModification = document.getElementById("manage-name");
const siegeModification = document.getElementById("manage-seat");
const formulaireSuppression = document.getElementById("delete-form");
const passagerSuppression = document.getElementById("delete-passenger");
const message = document.getElementById("message");

reservations.sort(function (a, b) {
  return a.siege - b.siege;
});

function sauvegarder() {
  localStorage.setItem(CLE_STOCKAGE, JSON.stringify(reservations));
}

function trouverReservation(siege) {
  for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].siege === siege) {
      return reservations[i];
    }
  }
  return null;
}

function siegeLibre(siege) {
  return trouverReservation(siege) === null;
}

function premierSiegeLibre() {
  for (let siege = 1; siege <= NOMBRE_DE_SIEGES; siege++) {
    if (siegeLibre(siege)) {
      return siege;
    }
  }
  return null;
}

function afficherMessage(texte) {
  message.textContent = texte;
}

function afficherSieges() {
  grille.innerHTML = "";
  let siege = 1;

  for (let rangee = 1; rangee <= 5; rangee++) {
    for (let place = 1; place <= 4; place++) {
      const numero = siege;
      const bouton = document.createElement("button");
      bouton.type = "button";
      bouton.className = "seat";
      bouton.textContent = numero;

      const reservation = trouverReservation(numero);

      if (reservation) {
        bouton.classList.add("occupied");
        bouton.title = reservation.nom;

        const nom = document.createElement("small");
        nom.textContent = reservation.nom;
        bouton.appendChild(nom);
      }

      bouton.onclick = function () {
        choisirSiege(numero);
      };

      grille.appendChild(bouton);

      if (place === 2) {
        const couloir = document.createElement("div");
        grille.appendChild(couloir);
      }

      siege++;
    }
  }
}
