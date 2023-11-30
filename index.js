function TabVide(div) {
    divCor = document.getElementById(div);

    var nTab = document.createElement('table');
    nTab.id = 'monTableau';

    // TD avec rien dedans
    var nTdVide = document.createElement('td');
    nTdVide.setAttribute('id', 'vide');
    nTdVide.innerHTML = '&nbsp';


    // Première ligne du Tableau            tr1
    var nTh1 = document.createElement('th');
    nTh1.setAttribute('id', 'metrecube');
    nTh1.setAttribute('colspan', '3');
    nTh1.innerHTML = 'Mètre cube';
    var nTh2 = document.createElement('th');
    nTh2.setAttribute('id', 'decimetrecube');
    nTh2.setAttribute('colspan', '3');
    nTh2.innerHTML = 'Décimètre cube';
    var nTh3 = document.createElement('th');
    nTh3.setAttribute('id', 'centimetrecube');
    nTh3.setAttribute('colspan', '3');
    nTh3.innerHTML = 'Centimètre cube';
    var nTh4 = document.createElement('th');
    nTh4.setAttribute('id', 'millimetrecube');
    nTh4.setAttribute('colspan', '3');
    nTh4.innerHTML = 'Millimètre cube';


    // Deuxième ligne du Tableau            tr2
    var nTd1 = document.createElement('td');
    nTd1.setAttribute('id', 'm3');
    nTd1.setAttribute('colspan', '3');
    nTd1.innerHTML = 'm³';
    var nTd2 = document.createElement('td');
    nTd2.setAttribute('id', 'dm3');
    nTd2.setAttribute('colspan', '3');
    nTd2.innerHTML = 'dm³';
    var nTd3 = document.createElement('td');
    nTd3.setAttribute('id', 'cm3');
    nTd3.setAttribute('colspan', '3');
    nTd3.innerHTML = 'cm³';
    var nTd4 = document.createElement('td');
    nTd4.setAttribute('id', 'mm3');
    nTd4.setAttribute('colspan', '3');
    nTd4.innerHTML = 'mm³';


    //Troisième ligne du Tableau            tr3
    //TDVide * 2
    var nTd11 = document.createElement('td');
    nTd11.setAttribute('id', 'kilolitre');
    nTd11.innerHTML = 'kilolitre';
    var nTd5 = document.createElement('td');
    nTd5.setAttribute('id', 'hectolitre');
    nTd5.innerHTML = 'hectolitre';
    var nTd6 = document.createElement('td');
    nTd6.setAttribute('id', 'decalitre');
    nTd6.innerHTML = 'décalitre';
    var nTd7 = document.createElement('td');
    nTd7.setAttribute('id', 'litre');
    nTd7.innerHTML = 'litre';
    var nTd8 = document.createElement('td');
    nTd8.setAttribute('id', 'decilitre');
    nTd8.innerHTML = 'décilitre';
    var nTd9 = document.createElement('td');
    nTd9.setAttribute('id', 'centilitre');
    nTd9.innerHTML = 'centilitre';
    var nTd10 = document.createElement('td');
    nTd10.setAttribute('id', 'millilitre');
    nTd10.innerHTML = 'millilitre';
    //TDVide * 3


    //Quatrième ligne du Tableau            tr4
    //TDVide * 2
    var nTd12 = document.createElement('td');
    nTd12.setAttribute('id', 'kl');
    nTd12.innerHTML = 'kl';
    var nTd13 = document.createElement('td');
    nTd13.setAttribute('id', 'hl');
    nTd13.innerHTML = 'hl';
    var nTd14 = document.createElement('td');
    nTd14.setAttribute('id', 'dal');
    nTd14.innerHTML = 'dal';
    var nTd15 = document.createElement('td');
    nTd15.setAttribute('id', 'l');
    nTd15.innerHTML = 'l';
    var nTd16 = document.createElement('td');
    nTd16.setAttribute('id', 'dl');
    nTd16.innerHTML = 'dl';
    var nTd17 = document.createElement('td');
    nTd17.setAttribute('id', 'cl');
    nTd17.innerHTML = 'cl';
    var nTd18 = document.createElement('td');
    nTd18.setAttribute('id', 'ml');
    nTd18.innerHTML = 'ml';
    //TDVide * 3


    var tr1 = null;
    var tr2 = null;
    var tr3 = null;
    var tr4 = null;
    var tr5 = null;
    var tr6 = null;

    for(let i=0; i<6; i++) {
        var nTr = document.createElement('tr');
        nTr.setAttribute('id', 'tr'+String(Number(i)+1));
        nTab.appendChild(nTr);
        switch(i) {
            case 0:
                tr1 = nTr;
                break;
            case 1:
                tr2 = nTr;
                break;
            case 2:
                tr3 = nTr;
                break;
            case 3:
                tr4 = nTr;
                break;
            case 4:
                tr5 = nTr;
                break;
            case 5:
                tr6 = nTr;
                break;
        }
    }
    for(let j = 0; j<2; j++) {
        for(let i = 0; i<12; i++) {
            var nTdInp = document.createElement('td');
            nTdInp.setAttribute('id', 'td' + String(Number(j)+1) + '_' + String(Number(i)+1));

            var nInp = document.createElement('input');
            nInp.setAttribute('type', 'number');
            nInp.setAttribute('style', 'text-align: center;');
            nInp.setAttribute('id', 'input' + String(Number(j)+1) + '_' + String(Number(i)+1))
            nInp.setAttribute('min', '0');
            nInp.setAttribute('max', '9');
            nInp.setAttribute('max-length', '1');
            if(j == 0) {
                nInp.setAttribute('readonly', 'readonly');
            }
            
            nTdInp.appendChild(nInp);

            if(j == 0) {
                tr5.appendChild(nTdInp);
            }
            else {
                tr6.appendChild(nTdInp);
            }
        }
    }
    

    tr1.appendChild(nTh1);
    tr1.appendChild(nTh2);
    tr1.appendChild(nTh3);
    tr1.appendChild(nTh4);

    tr2.appendChild(nTd1);
    tr2.appendChild(nTd2);
    tr2.appendChild(nTd3);
    tr2.appendChild(nTd4);

    tr3.appendChild(nTdVide.cloneNode(true));
    tr3.appendChild(nTdVide.cloneNode(true));
    tr3.appendChild(nTd11);
    tr3.appendChild(nTd5);
    tr3.appendChild(nTd6);
    tr3.appendChild(nTd7);
    tr3.appendChild(nTd8);
    tr3.appendChild(nTd9);
    tr3.appendChild(nTd10);
    tr3.appendChild(nTdVide.cloneNode(true));
    tr3.appendChild(nTdVide.cloneNode(true));
    tr3.appendChild(nTdVide.cloneNode(true));

    tr4.appendChild(nTdVide.cloneNode(true));
    tr4.appendChild(nTdVide.cloneNode(true));
    tr4.appendChild(nTd12);
    tr4.appendChild(nTd13);
    tr4.appendChild(nTd14);
    tr4.appendChild(nTd15);
    tr4.appendChild(nTd16);
    tr4.appendChild(nTd17);
    tr4.appendChild(nTd18);
    tr4.appendChild(nTdVide.cloneNode(true));
    tr4.appendChild(nTdVide.cloneNode(true));
    tr4.appendChild(nTdVide.cloneNode(true));

    divCor.appendChild(nTab);
}

function Hidee(form, fs, div) {
    if(document.getElementById('monTableau') == null) {
        TabVide(div);
    }
    
    Correction = document.forms[form].elements[fs];
    cl = Correction.classList;
    if (cl == 'hide') {
        cl.remove('hide');
    }
    else {
        cl.add('hide');
    }
}

function Demarrer(form, exo, bu) {
    document.forms[form].elements[bu].classList.add('hide');
}