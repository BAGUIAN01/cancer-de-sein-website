const body = document.querySelector("body"),
modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})




function chargerContenu() {
 
    fetch('signup.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#conteneur_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_espace_perso() {
 
    fetch('espace_personel.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#espace_perso_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}


function chargerContenu_prevention() {
 
    fetch('prevention.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#prevention_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_contact() {
 
    fetch('contactusAyoub.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#contact_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}


document.addEventListener("chargerContenu", function () {
    const loadContentButton = document.getElementById("loadContentButton");
    const contentFromPage2 = document.getElementById("contentFromPage2");

    loadContentButton.addEventListener("click", function () {
        fetch("page2.html")
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const conteneur2 = doc.getElementById("conteneur2");

                contentFromPage2.innerHTML = conteneur2.innerHTML;

                // Sélection de l'image de la page 2
                const imageFromPage2 = contentFromPage2.querySelector("img");

                // Modification de la classe CSS de l'image
                imageFromPage2.classList.add("custom-image-style");
            });
    });
});



// signup

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
loginForm.style.marginLeft = "0%";
loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
signupBtn.click();
return false;
});





// espace personel
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




//prevention

const changeBackgroundLinks = document.querySelectorAll(".change-background-link");
    const windowElement = document.querySelector(".bkg_img");
    let oldBackground = '../img/prevention_new.PNG';
    let currentBackground = '../img/prevention_new.PNG'; // Image de fond par défaut

    changeBackgroundLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche la navigation par défaut
            const newBackground = link.getAttribute("data-background");
            
            if (newBackground !== currentBackground) {
                windowElement.style.backgroundImage = `url('${newBackground}')`;
                currentBackground = newBackground;
            } else {
                // Si l'arrière-plan actuel est le même que celui du lien, revenez à l'arrière-plan initial
                windowElement.style.backgroundImage = `url('../img/${oldBackground}')`;
                currentBackground = currentBackground;
            }
        });
    });