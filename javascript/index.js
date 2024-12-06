const image = document.getElementById('image');
const link = document.getElementById('moveLink');

link.addEventListener('click', function(e) {
  e.preventDefault();  // Empêche l'action par défaut du lien
  image.classList.toggle('moving'); // Ajoute ou enlève la classe "moving"
});