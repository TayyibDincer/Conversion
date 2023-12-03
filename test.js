function Renvoyer() {
    return ['m', 3];
}

function salut() {
    [m, p] = Renvoyer();
    document.getElementById('reponse').value = String(m) + String(p);
}