
    function changerArrierePlan() {
        const changeBackgroundLinks = document.querySelectorAll(".change-background-link");
        const windowElement = document.querySelector(".bkg_img");
        let oldBackground = '../img/prevention_new.PNG';
        let currentBackground = null;
    
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
                    currentBackground = oldBackground; // Réinitialise à l'arrière-plan par défaut
                }
            });
        });
    }
    
