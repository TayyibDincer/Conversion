function Hidee(form, fs, button) {
    // Cette fonction crée tout d'abord le tableau 'tabAide' dans le div 'divaide', et une et unique fois
    // Ensuite il permet de Montrer et/ou Cacher le tableau 'tabAide' si le bouton _button est pressé (dans notre cas pour l'instant
    // _button = 'aidebutton1' always)
    if (document.getElementById('tabAide') == null) {
        TabVideAide1('divaide');
    }



    if (fs == 'autre') {
        alert('L\'aide n°2 n\'est pas disponible pour le moment.');
    }
    else {
        Aide = document.forms[form].elements[fs];
        cl = Aide.classList;
    }



    if (cl == 'hide' && button == 'aidebutton1') {
        cl.remove('hide');
    }
    else if (cl != 'hide' && button == 'aidebutton1') {
        cl.add('hide');
    }
}

function nbRandom(unite) {
    // Cette fonction prend en paramètre une unité et crée à partir de cette unité un nombre aléatoire avec une taille fixe après la
    // virgule et le renvoie.
    trois = 999;
    quatre = 9999;
    cinq = 99999;
    six = 99999;
    sept = 99999;
    huit = 99999;
    neuf = 99999;
    dix = 99999;
    onze = 99999;
    douze = 99999;

    
    
    switch(unite) {
        case 'ml':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 4) {
                nv = 3;
            }
            return [(nc.toFixed(nv)), nv];
        case 'cl':
            nc = Number(Math.random()*huit);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 5) {
                nv = 4;
            }
            return [(nc.toFixed(nv)), nv];
        case 'g':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 4) {
                nv = 3;
            }
            return [(nc.toFixed(nv)), nv];
        case 'm3':
            nc = Number(Math.random()*trois);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dm3':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'cm3':
            nc = Number(Math.random()*neuf);
            nv = Number(Math.floor(Math.random()*3));
            
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
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'hl':
            nc = Number(Math.random()*quatre);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 9) {
                nv = 8;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dal':
            nc = Number(Math.random()*cinq);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 8) {
                nv = 7;
            }
            return [(nc.toFixed(nv)), nv];
        case 'l':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dl':
            nc = Number(Math.random()*sept);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 6) {
                nv = 5;
            }
            return [(nc.toFixed(nv)), nv];
        case 't':
            nc = Number(Math.random()*trois);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 10) {
                nv = 9;
            }
            return [(nc.toFixed(nv)), nv];
        case 'kg':
            nc = Number(Math.random()*six);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 7) {
                nv = 6;
            }
            return [(nc.toFixed(nv)), nv];
        case 'hg':
            nc = Number(Math.random()*sept);
            nv = Number(Math.floor(Math.random()*3));
            
            if (nv == 6) {
                nv = 5;
            }
            return [(nc.toFixed(nv)), nv];
        case 'dag':
            nc = Number(Math.random()*huit);
            nv = Number(Math.floor(Math.random()*3));
            
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

function nbCorrection(eui, enb, cui, calv) {
    // eui = exo_unite_index
    // enb = exo_nb
    // cui = correction_unite_index


    // Première étape : soustraire l'unité de la correction - l'unité de l'exo = diff
    diff = Number(cui) - Number(eui);
    nbrepetition = null;


    // Deucième étape : crée le multiplicateur utilisé pour multiplier le nb de l'exo pour trouver le resultat
    if (diff > 0) {
        multiplicateur = '1'+('0'.repeat(diff));
        multiplicateur = Number(multiplicateur);
    }
    else if (diff < 0){
        nbrepetition = Math.abs(diff) - 1;
        multiplicateur = '0.'+('0'.repeat(nbrepetition))+'1';
        multiplicateur = Number(multiplicateur);
    }
    else {
        multiplicateur = 1;
    }


    // Troisième étape : return la reponse
    reponse = enb * multiplicateur;
    if (nbrepetition != null) {
        reponse = reponse.toFixed(calv + nbrepetition + 1);
    }
    // document.getElementById('provisoire').innerHTML = 'cui = ' + cui + ' eui = ' + eui + ' diff = ' + diff + ' multiplicateur = ' + multiplicateur + ' reponse = ' + reponse;
    return reponse;
}

function uniteRandom() {
    // Cette fonction renvoie une unité aléatoire
    // avec 51% de chance de tomber sur ml, cl, ou g.
    // et 49% les 16 autres unités.

    nb = Math.random();
    if (0 <= nb < 0.17) {
        return 'ml';
    }
    else if (0.17 <= nb < 0.34) {
        return 'cl';
    }
    else if (0.34 <= nb < 0.51) {
        return 'g';
    }
    else if (0.51 <= nb < 0.540625) {
        return 'm3';
    }
    else if (0.540625 <= nb < 0.57125) {
        return 'dm3';
    }
    else if (0.57125 <= nb < 0.601875) {
        return 'cm3';
    }
    else if (0.601875 <= nb < 0.6325) {
        return 'mm3';
    }
    else if (0.6325 <= nb < 0.663125) {
        return 'kl';
    }
    else if (0.663125 <= nb < 0.69375) {
        return 'hl';
    }
    else if (0.69375 <= nb < 0.724375) {
        return 'dal';
    }
    else if (0.724375 <= nb < 0.755) {
        return 'l';
    }
    else if (0.755 <= nb < 0.785625) {
        return 'dl';
    }
    else if (0.785625 <= nb < 0.81625) {
        return 't';
    }
    else if (0.81625 <= nb < 0.846875) {
        return 'kg';
    }
    else if (0.846875 <= nb < 0.8775) {
        return 'hg';
    }
    else if (0.8775 <= nb < 0.908125) {
        return 'dag';
    }
    else if (0.908125 <= nb < 0.93875) {
        return 'dg';
    }
    else if (0.93875 <= nb < 0.969375) {
        return 'cg';
    }
    else if (0.969375 <= nb <= 1) {
        return 'mg';
    }
    else {
        return 'ml';
    }
}

function uniteRandomCorrection(unite) {
    correction_tab = null;
    correction_unite = null;
    while (correction_unite == null || correction_unite == unite) {
        nbtempo = Math.random();
        if (nbtempo < 0.40) {
            var rand = Math.floor(Math.random() * tabGramme.length);
            var correction_unite = tabGramme[rand];
            correction_tab = tabGramme;
        }
        else if (nbtempo < 0.80) {
            var rand = Math.floor(Math.random() * tabLitre.length);
            var correction_unite = tabLitre[rand];
            correction_tab = tabLitre;
        }
        else {
            var rand = Math.floor(Math.random() * tabCube.length);
            var correction_unite = tabCube[rand];
            correction_tab = tabCube;
        }
    }
    return [correction_unite, rand, correction_tab];
}

function NewConversion(exo) {
    var exoa = document.getElementById(exo);
    if (document.getElementById('exoprovisoire') != null) {
        document.getElementById('exoprovisoire').remove();
    }


    // Initialisation de _res(le html de l'exercice)
    res = '';


    // Création des tableaux d'unités
    tabCube = [null, null, "m3", null, null, "dm3", null, null, "cm3", null, null, "mm3"];
    tabLitre = [null, null, "kl", "hl", "dal", "l", "dl", "cl", "ml", null, null, null];
    tabGramme = [null, null, "t", null, null, "kg", "hg", "dag", "g", "dg", "cg", "mg"];


    // Création de _exo_unite(unité de l'exercice) et _exo_unite_index(place de l'unité dans son tableau) et
    // _exo_tab(son tableau)
    // //
    // //
    // //
    exo_unite = uniteRandom();
    exo_unite_index = 0;
    exo_tab = tabLitre;

    if (tabCube.includes(exo_unite)) {
        exo_unite_index = tabCube.indexOf(exo_unite);
        exo_tab = tabCube;
    }
    else if (tabLitre.includes(exo_unite)) {
        exo_unite_index = tabLitre.indexOf(exo_unite);
        exo_tab = tabLitre;
    }
    else if (tabGramme.includes(exo_unite)) {
        exo_unite_index = tabGramme.indexOf(exo_unite);
        exo_tab = tabGramme;
    }
    else {
        exo_unite_index = 2;
        exo_tab = tabLitre;
    }


    // Création de _correction_unite(unité du résultat), _correction_ unite_index(place de l'unité dans son tableau) et
    // _correction_tab(son tableau):

    // // Récupération de _correction_unite de la fonction uniteRandomCorrection(unite)
    // // Récupération de _correction_unite_index de la fonction uniteRandomCorrection(unite)
    // // Récupération de _correction_tab de la fonction uniteRandomCorrection(unite)
    [correction_unite, correction_unite_index, correction_tab] = uniteRandomCorrection(exo_unite);


    // Création de _exo_nb(nombre à convertir)
    [exo_nb, chiffreapreslavirgule] = nbRandom(exo_unite);
    

    // Création de la réponse
    var rep = nbCorrection(exo_unite_index, exo_nb, correction_unite_index, chiffreapreslavirgule);


    // Mettre le name de la balise p avec l'id triche en réponse puis si on en a besoin(de la réponse) on retirera
    // le nom de la balise p
    document.getElementById('triche').setAttribute('name', rep);


    // Remplissage de res
    res = 'Convertissez ' + exo_nb + ' ' + exo_unite + ' en ' + correction_unite;


    // Crée une balise p qu'on affichera avec res dedans
    noeudP = document.createElement('p');
    noeudP.setAttribute('id', 'exoprovisoire');
    noeudP.innerHTML = res;
    exoa.appendChild(noeudP);
}

function Demarrer(form, exo, bu) {
    // Cette fonction fait plusieurs choses que je devrais diviser plus tard :
    // -Elle cache le bouton "Commencer";
    // -Elle crée une balise 'p';
    // -Elle crée l'exercice et le met dans la balise de 'p';


    // Cacher le bouton "Commencer"
    document.forms[form].elements[bu].classList.add('hide');
    
    NewConversion(exo);
}

function VerifRep(form, idtriche, idrep) {
    var shrinkindex = false;
    var sareponse = document.forms[form].elements[idrep].value;
    
    for (let i = 0; i<sareponse.length; i++) {
        if (sareponse[i] == ",") {
            shrinkindex = i;
        }
    }

    if (shrinkindex != false) {
        Str1 = sareponse.substr(0, shrinkindex);
        Str2 = sareponse.substr(shrinkindex+1);
        newStr = Str1 + '.' + Str2;
        sareponse = newStr;
    }
    
    if (sareponse == document.forms[form].elements[idtriche].getAttribute('name')) {
        alert('Réussi');
        NewConversion('exercice');
        document.getElementById('reponse').value = "";
    }
    else {
        alert('Échoué');
    }
}

function reloadAndSupp(rep) {
    document.getElementById(rep).value = "";
    document.location.reload();
}