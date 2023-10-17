document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

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
    const totalScore = q1Answer* + q2Answer + q3Answer + q4Score + q5Answer + q6Answer + q7Score + q8Answer;

    // Calculer le pourcentage de risque en fonction de l'âge, de la pollution de l'air et de l'eau
   
 

        // Initialiser le score.
        var ageScore = 0;
        var airPollutionScore = 0;
        var waterPollutionScore = 0;

        // Calculer le score en fonction de l'âge.
        if (age < 25) {
            ageScore = 0;
        } else if (age >= 26 && age < 50) {
            ageScore = 1;
        } else {
            ageScore = 1.5;
        }

        

        // Calculer le score en fonction d'airPollution
        if (airPollution > 7) {
            airPollutionScore = 1;
        } else if (airPollution >= 4 && airPollution < 7) {
            airPollutionScore = 0.5;
        } else {
            airPollutionScore = 0;
        }


        // Calculer le score en fonction d'waterPollution
        if (waterPollution > 7) {
            waterPollutionScore = 1;
        } else if (waterPollution >= 4 && waterPollution < 7) {
            waterPollutionScore = 0.5;
        } else {
            waterPollutionScore = 0;
        }
        const maxScorePossible = 19;
    const pourcentageRisque = ((totalScore + ageScore + airPollutionScore + waterPollutionScore) / maxScorePossible) * 100; 

    let risque = "Non élevé"; // Par défaut, le risque est considéré comme non élevé
    if (pourcentageRisque >= 70) {
        risque = " Elevé";
    } else if (pourcentageRisque >= 40 && pourcentageRisque < 70) {
        risque = "Moyen";
    }
    // Afficher le résultat
    const resultElement = document.getElementById("result");
    alert(`Votre risque est de ${pourcentageRisque.toFixed(2)}%. Le risque est ${risque}`);
    const progressElement = document.getElementById("risk-progress");
    progressElement.value = pourcentageRisque;
    });