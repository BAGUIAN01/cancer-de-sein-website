    // // JavaScript pour gérer le clic sur le lien "Auto palpation"
    // const autoPalpationLink = document.getElementById("autoPalpationLink");
    // const guideLink = document.getElementById("guideLink");
    // const windowElement = document.querySelector(".bkg_img");

    // let isOldBackground = true; // Variable pour stocker l'état actuel de l'arrière-plan

    // autoPalpationLink.addEventListener("click", function (event) {
    //     event.preventDefault(); // Empêche la navigation par défaut

    //     if (isOldBackground) {
    //         // Si l'arrière-plan actuel est l'ancienne image, changez-la en la nouvelle image
    //         windowElement.style.backgroundImage = "url('../img/autopalpation.jpg')";
    //         isOldBackground = false;
    //     } else {
    //         // Si l'arrière-plan actuel est la nouvelle image, changez-la en l'ancienne image
    //         windowElement.style.backgroundImage = "url('../img/prevention_new.PNG')";
    //         isOldBackground = true;
    //     }
    // });
    // guideLink.addEventListener("click", function (event) {
    //     event.preventDefault(); // Empêche la navigation par défaut

    //     if (isOldBackground) {
    //         // Si l'arrière-plan actuel est l'ancienne image, changez-la en la nouvelle image
    //         windowElement.style.backgroundImage = "url('../img/guide.avif')";
    //         isOldBackground = false;
    //     } else {
    //         // Si l'arrière-plan actuel est la nouvelle image, changez-la en l'ancienne image
    //         windowElement.style.backgroundImage = "url('../img/prevention_new.PNG')";
    //         isOldBackground = true;
    //     }
    // });

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
