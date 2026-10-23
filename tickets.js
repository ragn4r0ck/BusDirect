const CLE_STOCKAGE = "reservations";
const PRIX = 80;

let reservations = JSON.parse(localStorage.getItem(CLE_STOCKAGE)) || [];

reservations.sort(function (a, b) {
  return a.siege - b.siege;
});

function afficherBillets() {
  const tableau = document.getElementById("ticket-rows");
  tableau.innerHTML = "";

  for (let i = 0; i < reservations.length; i++) {
    const reservation = reservations[i];

    const ligne = document.createElement("tr");

    const celluleNom = document.createElement("td");
    celluleNom.textContent = reservation.nom;

    const celluleTrajet = document.createElement("td");
    celluleTrajet.textContent = "Safi → Marrakech";

    const celluleSiege = document.createElement("td");
    celluleSiege.textContent = "Siège " + reservation.siege;

    const celluleTarif = document.createElement("td");
    celluleTarif.textContent = PRIX + " DH";

    ligne.appendChild(celluleNom);
    ligne.appendChild(celluleTrajet);
    ligne.appendChild(celluleSiege);
    ligne.appendChild(celluleTarif);
    tableau.appendChild(ligne);
  }
}

afficherBillets();
