function myFunction() {
    alert('Petit conseil :\nMeilleur visionnage en rotation paysage.');
}

function enregistrerName () {
    salut = document.getElementById('nomexemple').value;
    localStorage.setItem('name', salut);
}

function recupererName () {
    provi = document.getElementById('provisoire');
    provi.innerHTML = localStorage.getItem('name');
}