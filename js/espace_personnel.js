function showCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "block";
    
    setTimeout(function() {
        customAlert.style.display = "none"; // Cache le message personnalisé après 1 seconde
    }, 1000);
}



//btn de la barre de titre
function notifPopup() {
    var popup = document.getElementById("notifpopup");
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
    } else {
        popup.classList.add("hidden");
    }
    // Ajoutez un gestionnaire d'événements pour le bouton de fermeture
    var closeBtn = document.getElementById("closePopup");
    closeBtn.addEventListener("click", function() {
        notifPopup(); // Appel de la fonction pour fermer le popup
    });
}
function carnetPopup() {
    var popup = document.getElementById("carnetpopup");
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
    } else {
        popup.classList.add("hidden");
    }
    // Ajoutez un gestionnaire d'événements pour le bouton de fermeture
    var closeBtn = document.getElementById("closeCarnetPopup");
    closeBtn.addEventListener("click", function() {
        carnetPopup(); // Appel de la fonction pour fermer le popup
    });
}
function assurPopup() {
    var popup = document.getElementById("assurpopup");
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
    } else {
        popup.classList.add("hidden");
    }
    // Ajoutez un gestionnaire d'événements pour le bouton de fermeture
    var closeBtn = document.getElementById("closeAssurPopup");
    closeBtn.addEventListener("click", function() {
        assurPopup(); // Appel de la fonction pour fermer le popup
    });
}

function afficherMessage(element) {
    var messages = {
        "Ordonnance": "Aucune ordonnance.",
        "Agenda": "Aucun agenda créé.",
        "Guide à suivre": "Aucun guide disponible.",
        "Assistant virtuel": "Pas implémenté."
    };

    var messageArea = document.getElementById("messageArea");

    // Obtenez le texte de l'élément de la liste
    var listItemText = element.textContent;

    // Affichez le message correspondant dans la zone de message
    if (messages.hasOwnProperty(listItemText)) {
        messageArea.textContent = messages[listItemText];

        // Utilisez setTimeout pour masquer le message après 1 seconde
        setTimeout(function() {
            messageArea.textContent = "";
        }, 1000); // 1000 millisecondes = 1 seconde
    } else {
        messageArea.textContent = "";
    }
}

// Obtenez tous les éléments de liste
var listItems = document.querySelectorAll("ul li a");

// Ajoutez un gestionnaire d'événements à chaque élément de la liste
listItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de se comporter comme une URL
        afficherMessage(item);
    });
});




// //prise de RDV

function prendreRDV() {
    var slotsPopup = document.getElementById("slotsPopup");
    slotsPopup.style.display = "block";

    document.getElementById("closeSlots").addEventListener("click", function() {
        slotsPopup.style.display = "none";
    });

    var slotList = document.getElementById("slotList");
    slotList.innerHTML = ""; // Efface les créneaux horaires existants

    // Exemple de créneaux horaires disponibles
    var availableSlots = ["Créneau 1: 9:00 - 10:00 ", "Créneau 2: 10:30 - 11:30 ", "Créneau 3: 14:00 - 15:00"];

    availableSlots.forEach(function(slot, index) {
        var slotItem = document.createElement("li");
        slotItem.textContent = slot;
        slotItem.addEventListener("click", function() {
            // Afficher un message "RDV pris" dans le même popup
            var appointmentTakenMessage = document.createElement("div");
            appointmentTakenMessage.className = "appointment-taken-message";
            appointmentTakenMessage.textContent = "RDV pris pour : " + slot;
            slotsPopup.appendChild(appointmentTakenMessage);

            // Masquer le message après quelques secondes (par exemple, 3 secondes)
            setTimeout(function() {
                slotsPopup.removeChild(appointmentTakenMessage);
            }, 1000);
        });
        slotList.appendChild(slotItem);
    });
}
