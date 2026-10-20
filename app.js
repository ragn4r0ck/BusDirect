const NOMBRE_DE_SIEGES = 20;
const PRIX = 80;

let reservations = [];

const grille = document.getElementById("seat-grid");
const siegeAjout = document.getElementById("booking-seat");

reservations.sort(function (a, b) {
  return a.siege - b.siege;
});

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

function afficherSieges() {
  grille.innerHTML = "";
  let siege = 1;

  for (let rangee = 1; rangee <= 5; rangee++) {
    for (let place = 1; place <= 4; place++) {
      const numero = siege;
      const bouton = document.createElement("button");
      bouton.type = "button";
      bouton.className =
        "min-h-[52px] cursor-pointer rounded-md border border-[#999] bg-white p-1 text-[13px] text-[#222] hover:bg-[#f0f0f0]";
      bouton.textContent = numero;

      const reservation = trouverReservation(numero);

      if (reservation) {
        bouton.classList.replace("bg-white", "bg-[#e0e0e0]");
        bouton.classList.replace("hover:bg-[#f0f0f0]", "hover:bg-[#e0e0e0]");
        bouton.title = reservation.nom;

        const nom = document.createElement("small");
        nom.className = "mt-[3px] block overflow-hidden text-ellipsis whitespace-nowrap text-[9px]";
        nom.textContent = reservation.nom;
        bouton.appendChild(nom);
      }
      grille.appendChild(bouton);

      if (place === 2) {
        const couloir = document.createElement("div");
        grille.appendChild(couloir);
      }

      siege++;
    }
  }
}

function remplirSelectAjout() {
  siegeAjout.innerHTML = "";
  siegeAjout.add(new Option("Choisir automatiquement", ""));

  for (let siege = 1; siege <= NOMBRE_DE_SIEGES; siege++) {
    if (siegeLibre(siege)) {
      siegeAjout.add(new Option("Siège " + siege, siege));
    }
  }
}

function afficher() {
  afficherSieges();
  remplirSelectAjout();

  document.getElementById("available-count").textContent = NOMBRE_DE_SIEGES - reservations.length;
  document.getElementById("occupied-count").textContent = reservations.length;
  document.getElementById("revenue-count").textContent = reservations.length * PRIX + " DH";
  document.getElementById("ticket-count").textContent = reservations.length;
}

afficher();
