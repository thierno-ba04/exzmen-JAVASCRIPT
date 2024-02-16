// Tableau pour stocker les tâches
let taches = [];

// Fonction pour ajouter une nouvelle tâche
function ajouterTache() {
    let nouvelleTacheInput = document.getElementById("nouvelleTache");
    let nouvelleTache = nouvelleTacheInput.value.trim();
    if (nouvelleTache !== "") {
        taches.push({ tache: nouvelleTache, terminee: false });
        afficherTaches();
        afficherStatistiques();
        nouvelleTacheInput.value = ""; // Efface le champ d'entrée
    }
}

// Fonction pour afficher toutes les tâches
function afficherTaches() {
    let listeTaches = document.getElementById("listeTaches");
    listeTaches.innerHTML = ""; // Efface la liste avant de la reconstruire

    taches.forEach((tache, index) => {
        let item = document.createElement("li");
        item.innerHTML = `<input type="checkbox" onchange="marquerTerminee(${index})" ${tache.terminee ? "checked" : ""}> ${tache.tache} <button onclick="supprimerTache(${index})">Supprimer</button>`;
        listeTaches.appendChild(item);
    });
}

// Fonction pour marquer une tâche comme terminée
function marquerTerminee(index) {
    taches[index].terminee = !taches[index].terminee;
    afficherStatistiques();
}

// Fonction pour supprimer une tâche
function supprimerTache(index) {
    taches.splice(index, 1);
    afficherTaches();
    afficherStatistiques();
}

// Fonction pour afficher le nombre total de tâches et le nombre de tâches terminées
function afficherStatistiques() {
    let nbTaches = taches.length;
    let nbTachesTerminees = taches.filter(tache => tache.terminee).length;
    let statistiques = document.getElementById("statistiques");
    statistiques.textContent = `Nombre total de tâches : ${nbTaches} | Nombre de tâches terminées : ${nbTachesTerminees}`;
}
