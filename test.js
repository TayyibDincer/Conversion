function Renvoyer() {
    return ['m', 3];
}

function salut() {
    [m, p] = Renvoyer();
    document.getElementById('reponse').value = String(m) + String(p);
}

// long morceau
function nbRandom(unite) {
    // Cette fonction prend en paramètre une unité et crée à partir de cette unité un nombre aléatoire avec une taille fixe après la
    // virgule et le renvoie.
    trois = 999;
    quatre = 9999;
    cinq = 99999;
    six = 999999;
    sept = 9999999;
    huit = 99999999;
    neuf = 999999999;
    dix = 9999999999;
    onze = 99999999999;
    douze = 999999999999;

    
    
    switch(unite) {
        case 'ml':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*4));
            
            if (nv == 4) {
                nv = 3;
            }
            return [(nc.toFixed(nv)), nv];
        case 'cl':
            nc = Number(Math.random()*huit);
            nv = Number(Math.floor(Math.random()*5));
            
            if (nv == 5) {
                nv = 4;
            }
            return [(nc.toFixed(nv)), nv];
        case 'g':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*4));
            
            if (nv == 4) {
                nv = 3;
            }
            return [(nc.toFixed(nv)), nv];
        case 'm3':
            nc = Number(Math.random()*trois);
            nv = Number(Math.floor(Math.random()*10));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dm3':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*7));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'cm3':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*4));
            
            if (nv == 4) {
                nv = 3;
            }
            return [(nc.toFixed(nv)), nv];
        case 'mm3':
            nc = Number(Math.random()*douze);
            nv = 0;
            
            return [(nc.toFixed(nv)), nv];
        case 'kl':
            nc = Number(Math.random()*trois);
            nv = Number(Math.floor(Math.random()*10));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'hl':
            nc = Number(Math.random()*quatre);
            nv = Number(Math.floor(Math.random()*9));
            
            if (nv == 9) {
                nv = 8;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dal':
            nc = Number(Math.random()*cinq);
            nv = Number(Math.floor(Math.random()*8));
            
            if (nv == 8) {
                nv = 7;
            }
            return [(nc.toFixed(nv)), nv];
        case 'l':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*7));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dl':
            nc = Number(Math.random()*sept);
            nv = Number(Math.floor(Math.random()*6));
            
            if (nv == 6) {
                nv = 5;
            }
            return [(nc.toFixed(nv)), nv];
        case 't':
            nc = Number(Math.random()*trois);
            nv = Number(Math.floor(Math.random()*10));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'kg':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*7));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'hg':
            nc = Number(Math.random()*sept);
            nv = Number(Math.floor(Math.random()*6));
            
            if (nv == 6) {
                nv = 5;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dag':
            nc = Number(Math.random()*huit);
            nv = Number(Math.floor(Math.random()*5));
            
            if (nv == 5) {
                nv = 4;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dg':
            nc = Number(Math.random()*dix);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 3) {
                nv = 2;
            }
            return [(nc.toFixed(nv)), nv];
        case 'cg':
            nc = Number(Math.random()*onze);
            nv = Number(Math.floor(Math.random()*2));
            
            if (nv == 2) {
                nv = 1;
            }
            return [(nc.toFixed(nv)), nv];
        case 'mg':
            nc = Number(Math.random()*douze);
            nv = 0;
            
            return [(nc.toFixed(nv)), nv];
    }
    nc = Number(Math.random()*trois);
    alert('default funct nbRandom from AllFunct.js');
    return [(nc.toFixed(0)), 0];
}