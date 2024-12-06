// pollution.js
function enregistrerReponse(pageSuivante) {
    // Sélectionner la réponse cochée
    const reponse = document.querySelector('input[name="question1"]:checked');
    
    // Vérifier si une réponse est sélectionnée
    if (!reponse) {
        alert("Veuillez sélectionner une réponse avant de continuer.");
        return;
    }

    // Enregistrer la réponse dans localStorage (utilisation de la page actuelle comme clé)
    const pageActuelle = window.location.pathname.split('/').pop(); // Exemple : 'page4.html'
    localStorage.setItem(pageActuelle, reponse.value);

    // Rediriger vers la page suivante
    window.location.href = pageSuivante + '.html';
}


function calculerIndicePollution() {
    // Liste des pages/questions pour récupérer les réponses
    const pages = ['Quizz.html', 'suivant1.html', 'suivant2.html', 'suivant3.html', 'suivant4.html'];
    let score = 0;

    // Parcours des réponses enregistrées
    pages.forEach(page => {
        const reponse = localStorage.getItem(page);
        if (reponse) {
            // Attribution d'un score en fonction des réponses (vous pouvez ajuster les valeurs)
            switch (reponse) {
                case 'option1': score += 10; break;  // Réponse écologique
                case 'option2': score += 30; break;  // Réponse moins écologique
                case 'option3': score += 50; break;  // Réponse nocive
                case 'option4': score += 20; break;  // Réponse partiellement écologique
            }
        }
    });

    // Calcul de l'indice final (moyenne des scores)
    const indiceFinal = (score / (pages.length * 50)) * 100;  // Exemple de calcul en pourcentage
    localStorage.setItem('indicePollution', indiceFinal.toFixed(2));  // Enregistrement

    // Redirige vers la page des résultats
    window.location.href = 'resultat.html';
}

