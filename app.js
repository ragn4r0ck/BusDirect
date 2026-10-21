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
