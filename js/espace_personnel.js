function showCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "block";
    
    setTimeout(function() {
        customAlert.style.display = "none"; // Cache le message personnalisé après 1 seconde
    }, 1000);
}

//btn des constantes de santé
const glycemieButton = document.getElementById("glycemie");
glycemieButton.onclick = showCustomAlert;
const pressionButton = document.getElementById("pression");
pressionButton.onclick = showCustomAlert;
const imcButton = document.getElementById("imc");
imcButton.onclick = showCustomAlert;
const scanButton = document.getElementById("scan");
scanButton.onclick = showCustomAlert;

//btn de la barre de titre
function showpopup(){
    
}
document.getElementById("notifPopup").addEventListener("click", function() {
    var popup = document.getElementById("notifpopup");
    popup.style.display = "block";

    document.getElementById("closePopup").addEventListener("click", function() {
        popup.style.display = "none";
    });

});
document.getElementById("carnetPopup").addEventListener("click", function() {
    var popup = document.getElementById("carnetpopup");
    popup.style.display = "block";

    document.getElementById("closeCarnetPopup").addEventListener("click", function() {
        popup.style.display = "none";
    });

});
document.getElementById("assurPopup").addEventListener("click", function() {
    var popup = document.getElementById("assurpopup");
    popup.style.display = "block";

    document.getElementById("closeAssurPopup").addEventListener("click", function() {
        popup.style.display = "none";
    });

});

//btn dossier de suivi
// Tableau des messages pour chaque élément de la liste
var messages = {
    "Ordonnance": "Aucune ordonnance.",
    "Agenda": "Aucun agenda crée.",
    "Guide à suivre": "Aucun guide disponible.",
    "Assistant virtuel": "Pas implementé."
};

var messageArea = document.getElementById("messageArea");

// Obtenez tous les éléments de liste
var listItems = document.querySelectorAll("ul li a");

// Ajoutez un gestionnaire d'événements à chaque élément de la liste
listItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de se comporter comme une URL

        // Obtenez le texte de l'élément de la liste
        var listItemText = item.textContent;

        // Affichez le message correspondant dans la zone de message
        if (messages.hasOwnProperty(listItemText)) {
            messageArea.textContent = messages[listItemText];
        } else {
            messageArea.textContent = "Message non trouvé.";
        }
    });
});
// ... (le code précédent)

// Ajoutez un gestionnaire d'événements à chaque élément de la liste
listItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de se comporter comme une URL

        // Obtenez le texte de l'élément de la liste
        var listItemText = item.textContent;

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
    });
});



//prise de RDV
document.getElementById("showSlots").addEventListener("click", function() {
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
});




