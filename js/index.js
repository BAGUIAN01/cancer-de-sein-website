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