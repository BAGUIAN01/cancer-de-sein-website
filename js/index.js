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

function rechargerPage() {
    location.reload(); // Cette ligne recharge la page
}


function chargerContenu() {
 
    fetch('./src/signup.html')
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
 
    fetch('./src/espace_personel.html')
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
 
    fetch('./src/prevention.html')
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
 
    fetch('./src/contactusAyoub.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#contact_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}


function chargerContenu_diagnostique() {
 
    fetch('./src/DiagnosticAyoub.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#diagnostique_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_apropos() {
 
    fetch('./src/AccueilAyoub.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#apropos_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_loader() {
 
    fetch('./src/loader.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#loader_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_agenda() {
 
    fetch('./src/agenda.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#agenda_id').innerHTML;
            document.getElementById('main').innerHTML = contenu;

            
        })
        .catch(error => console.error(error));
}

function chargerContenu_forum() {
 
    fetch('./src/forum.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var contenu = doc.querySelector('#forum_id').innerHTML;
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



// *****************************************************************************************************signup



function signup_func(){
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    const side = document.querySelector(".slide-controls .slider-tab")
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    side.style.marginLeft ="50%"

}

function login_func(){
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    const side = document.querySelector(".slide-controls .slider-tab")
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    side.style.marginLeft ="0%"
}


signupLink.onclick = (()=>{
signupBtn.click();
return false;
});





// ****************************************************************************************espace personel
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



function setupListClickHandler() {
    var messages = {
        "Ordonnance": "Aucune ordonnance.",
        "Agenda": "Aucun agenda crée.",
        "Guide à suivre": "Aucun guide disponible.",
        "Assistant virtuel": "Pas implementé."
    };
    var messageArea = document.getElementById("messageArea");
    var listItems = document.querySelectorAll("ul li a");
    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            var listItemText = item.textContent;
            if (messages.hasOwnProperty(listItemText)) {
                messageArea.textContent = messages[listItemText];
                setTimeout(function() {
                    messageArea.textContent = "";
                }, 5000); // 1000 millisecondes = 1 seconde
            } else {
                messageArea.textContent = "Message non trouvé.";
            }
        });
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

//prise de RDV
function prendreRDV() {
    var slotsPopup = document.getElementById("slotsPopup");
    slotsPopup.style.display = "block";

    // document.getElementById("closeSlots").addEventListener("click", function() {
    //     slotsPopup.style.display = "none";
    // });

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


function setupBackgroundChange() {
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
}

// Appelez la fonction pour configurer le changement d'arrière-plan
setupBackgroundChange();




//****************************************************************************************************prevention

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





    // *******************************************************************************************agenda

    
    // var appointments = {};

    //     // Initialize the calendar
        

    //     function updateCalendar() {
    //         let currentDate = new Date();
    //         const currentMonth = currentDate.getMonth();
    //         const currentYear = currentDate.getFullYear();
    //         const calendarBody = document.getElementById("calendarBody");
    //         const currentMonthDisplay = document.getElementById("currentMonth");

    //         currentMonthDisplay.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
    //         calendarBody.innerHTML = "";

    //         // Create a Date object for the first day of the month
    //         const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    //         // Calculate the number of days in the month
    //         const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    //         // Calculate the day of the week for the first day of the month (0 = Sunday, 6 = Saturday)
    //         const firstDayOfWeek = firstDayOfMonth.getDay();

    //         // Generate the calendar cells
    //         for (let row = 0; row < 6; row++) {
    //             // 6 rows are sufficient for any month
    //             const calendarRow = document.createElement("tr");

    //             for (let col = 0; col < 7; col++) {
    //                 const dayCell = document.createElement("td");

    //                 if (row === 0 && col < firstDayOfWeek) {
    //                     // Empty cells before the start of the month
    //                     dayCell.textContent = "";
    //                 } else {
    //                     const day = (row * 7) + col - firstDayOfWeek + 1;

    //                     if (day >= 1 && day <= lastDayOfMonth) {
    //                         // Show the day number and appointments for the day
    //                         dayCell.textContent = day;
    //                         const key = `${currentYear}-${currentMonth + 1}-${day}`;

    //                         if (key in appointments) {
    //                             dayCell.classList.add("day-highlight");
    //                             dayCell.dataset.key = key;
    //                         }
    //                     }
    //                 }

    //                 calendarRow.appendChild(dayCell);
    //             }

    //             calendarBody.appendChild(calendarRow);
    //         }
    //     }

    //     function previousMonth() {
    //         currentDate.setMonth(currentDate.getMonth() - 1);
    //         updateCalendar();
    //     }

    //     function nextMonth() {
    //         currentDate.setMonth(currentDate.getMonth() + 1);
    //         updateCalendar();
    //     }

    //     function addAppointment() {
    //         const dateInput = document.getElementById("date");
    //         const date = new Date(dateInput.value);
    //         const appointmentInput = document.getElementById("appointment");
    //         const appointment = appointmentInput.value;

    //         // Check if the date is in the current month
    //         if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
    //             const day = date.getDate();
    //             const key = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;

    //             if (key in appointments) {
    //                 appointments[key].push(appointment);
    //             } else {
    //                 appointments[key] = [appointment];
    //             }

    //             // Update the calendar
    //             updateCalendar();

    //             // Clear input fields
    //             dateInput.value = "";
    //             appointmentInput.value = "";
    //         } else {
    //             alert("Please select a date in the current month.");
    //         }
    //     }

    //     function showAppointments(element) {
    //         const key = element.dataset.key;
    //         const appointmentList = appointments[key];

    //         if (appointmentList && appointmentList.length > 0) {
    //             // Create an alert message with delete buttons
    //             let alertMessage = "Appointments for this day:\n\n";
    //             appointmentList.forEach((appointment, index) => {
    //                 alertMessage += `${index + 1}. ${appointment}\n`;
    //             });
    //             alertMessage += "\nEnter the appointment number to delete (e.g., 1, 2, 3) or click Cancel to close the alert.";

    //             const userInput = prompt(alertMessage);
    //             if (userInput !== null) {
    //                 const appointmentIndex = parseInt(userInput) - 1;
    //                 if (!isNaN(appointmentIndex) && appointmentIndex >= 0 && appointmentIndex < appointmentList.length) {
    //                     // Delete the selected appointment
    //                     deleteAppointment(key, appointmentList[appointmentIndex]);
    //                     alert("Appointment deleted.");
    //                 } else {
    //                     alert("Invalid input. No appointment was deleted.");
    //                 }
    //             }
    //         } else {
    //             alert("No appointments for this day.");
    //         }
    //     }
    //     function deleteAppointment(key, appointment) {
    //         // Delete the appointment
    //         appointments[key] = appointments[key].filter(item => item !== appointment);

    //         // Check if there are any remaining appointments for the day
    //         if (appointments[key].length === 0) {
    //             // Remove the day-highlight class if no appointments are left
    //             const dayCell = document.querySelector(`[data-key="${key}"]`);
    //             dayCell.classList.remove("day-highlight");
    //         }
    //     }
    //     document.addEventListener("click", event => {
    //         const target = event.target;

    //         if (target.classList.contains("day-highlight")) {
    //             const key = target.dataset.key;
    //             showAppointments(target);
    //         }
    //     });



// **********************************************************************Diagnostique


function calculerRisque() {
    // Obtenir les réponses sélectionnées
    const q1Answer = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2Answer = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3Answer = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4Answers = Array.from(document.querySelectorAll('input[name="q4[]"]:checked')).map(input => parseInt(input.value));
    const q5Answer = parseInt(document.querySelector('input[name="q5"]:checked').value);
    const q6Answer = parseInt(document.querySelector('input[name="q6"]:checked').value);
    const q7Answers = Array.from(document.querySelectorAll('input[name="q7[]"]:checked')).map(input => parseInt(input.value));
    const q8Answer = parseInt(document.querySelector('input[name="q8"]:checked').value);

    // Obtenir les réponses aux nouvelles questions
    const age = parseInt(document.getElementById("age").value);
    const airPollution = parseInt(document.getElementById("airPollution").value);
    const waterPollution = parseInt(document.getElementById("waterPollution").value);

    // Calculer le score total
    const q4Score = q4Answers.reduce((total, answer) => total + answer, 0);
    const q7Score = q7Answers.reduce((total, answer) => total + answer, 0);
    const totalScore = q1Answer + q2Answer + q3Answer + q4Score + q5Answer + q6Answer + q7Score + q8Answer;

    // Calculer le pourcentage de risque en fonction de l'âge, de la pollution de l'air et de l'eau
    // ...
    // (Le reste du code reste inchangé)

    const maxScorePossible = 19;
    const pourcentageRisque = ((totalScore + ageScore + airPollutionScore + waterPollutionScore) / maxScorePossible) * 100;

    let risque = "Non élevé"; // Par défaut, le risque est considéré comme non élevé
    if (pourcentageRisque >= 70) {
        risque = "Élevé";
    } else if (pourcentageRisque >= 40 && pourcentageRisque < 70) {
        risque = "Moyen";
    }
    // Afficher le résultat
    const resultElement = document.getElementById("result");
    alert(`Votre risque est de ${pourcentageRisque.toFixed(2)}%. Le risque est ${risque}`);
    const progressElement = document.getElementById("risk-progress");
    progressElement.value = pourcentageRisque;
}

// Ajouter un écouteur d'événement sur la soumission du formulaire
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculerRisque(); // Appeler la fonction de calcul du risque
});





// forum


function initComments() {
    // Initialize comments array
    let comments = [];
  
    // Function to add a comment
    function addComment(name, comment) {
      // Create new comment object
      let newComment = {
        name: name,
        comment: comment,
        likes: 0
      };
      // Add new comment to array
      comments.push(newComment);
      // Display updated comments
      displayComments();
    }
  
    // Function to delete a comment
    function deleteComment(index) {
      // Remove comment from array
      comments.splice(index, 1);
      // Display updated comments
      displayComments();
    }
  
    // Function to like a comment
    function likeComment(index) {
      // Increment likes for comment
      comments[index].likes++;
      // Display updated comments
      displayComments();
    }
  
    // Function to display comments
    function displayComments() {
      // Get comments list element
      let commentsList = document.getElementById("comments-list");
      // Clear comments list
      commentsList.innerHTML = "";
      // Loop through comments array and add each comment to list
      for (let i = 0; i < comments.length; i++) {
        // Create comment element
        let commentElement = document.createElement("li");
        // Create name element
        let nameElement = document.createElement("h3");
        nameElement.textContent = comments[i].name;
        // Create comment text element
        let commentTextElement = document.createElement("p");
        commentTextElement.textContent = comments[i].comment;
        // Create likes element
        let likesElement = document.createElement("p");
        likesElement.textContent = "Likes: " + comments[i].likes;
        // Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        // Add event listener to delete button
        deleteButton.addEventListener("click", function() {
          deleteComment(i);
        });
        // Create like button
        let likeButton = document.createElement("button");
        likeButton.textContent = "Like";
        // Add event listener to like button
        likeButton.addEventListener("click", function() {
          likeComment(i);
        });
        // Add elements to comment element
        commentElement.appendChild(nameElement);
        commentElement.appendChild(commentTextElement);
        commentElement.appendChild(likesElement);
        commentElement.appendChild(deleteButton);
        commentElement.appendChild(likeButton);
        // Add comment element to comments list
        commentsList.appendChild(commentElement);
      }
    }
  
    // Add event listener to form submit button
    let submitButton = document.getElementById("submit-button-forum");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let comment = document.getElementById("comment").value;
      addComment(name, comment);
    });
  }