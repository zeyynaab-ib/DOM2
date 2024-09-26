// Attendre que le contenu du DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments HTML
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        // Générer une couleur hexadécimale aléatoire
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événements au bouton
    changeColorBtn.addEventListener('click', () => {
        // Changer la couleur de la boîte à une couleur aléatoire
        colorBox.style.backgroundColor = getRandomColor();
    });
});
