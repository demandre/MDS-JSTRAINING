"use strict";

/*
Vous devez réaliser les tables de multiplications de “1, 2, 3, 5” et “8”.
*/
var i,x;
x=1;

for(i=1;i<=10;i++){
    console.log(x*i);
}

x=2
for(i=1;i<=10;i++){
    console.log(x*i);
}

x=3
for(i=1;i<=10;i++){
    console.log(x*i);
}

x=5
for(i=1;i<=10;i++){
    console.log(x*i);
}

x=8
for(i=1;i<=10;i++){
    console.log(x*i);
}

/*
Vous devez créer une liste html et intégrer les résultats de la table de “5” au document HTML 
(vous avez le droit d’utiliser que les String). Le résultat doit être le suivant :
1 x 5 = 5
2 x 5 = 10
...
*/
var htmlList = document.getElementsByTagName("ul")[0];
var node;

x=5
for(i=1;i<=10;i++){
    node = document.createElement("li");
    htmlList.appendChild(node);
    document.getElementsByTagName("li")[(document.getElementsByTagName("li").length)-1].innerHTML=i + ' x ' + x + ' = ' + x*i;
}


/*
Vous devez créer une boucle “while” avec “true” comme valeur de condition.
 Faite une incrémentation dans un console.log() avec la table de multiplication par “5”. 
 Vous devez observer le résultat et debugger votre script. Ecrivez en commentaire comment vous l’avez corrigé.
*/
x=5;
i=1;
while(true){
    console.log(x*i);
    i++;
    if(i > 10){
        break;
    }
}


/*
Vous devez créer le tableau suivant “[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]” 
vous devez ensuite utiliser la fonction “map” et retourner un nouveau tableau 
avec les résultats de la table de “5”.
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array = array.map(x => x * 5);
console.log(array);

/*
Vous devez créer une variable avec l’objet suivant “‘{name’: ‘42’, age: ‘42’}”. 
Vous devrez parcourir chaque keys et faire le calcul suivant : 42 * 42.
*/

var objet = {name: '42', age: '42'};
var key;
i=0;

for (i=0; i<Object.keys(objet).length; i++){
    key = Object.keys(objet)[i];
    console.log(objet[key] * 42);
}

/*
Vous devez réaliser un algo qui vous permettra de trier un tableau “nbr” par ordre décroissant par exemple 
si j’ai “[5, 4, 3, 2, 1]” le résultat sera “[1, 2, 3, 4, 5]”. 
Vous n’avez pas le droit d’utiliser de fonction.
*/

var nbr = [5, 4, 3, 2, 1];
var j,temp,min;
var change = true;

for(i=0; i<nbr.length; i++){
    j=i+1;
    while (nbr[j] < nbr[i]) {
        temp = nbr[i];
        nbr[i] = nbr[j];
        nbr[j] = temp;
        j++;
    }
}

console.log(nbr);

/*
Vous devez parcourir un objet  avec une key “nameCloth” qui contient un tableau avec les tailles suivantes  
“XS”, “S”, “L”, “M”, “XL”, “XXL” et calculer pour chacun d’eux la TVA. 
A la sortie un tableau à 3 dimension est attendu (aucune condition ou fonction).
*/

var store = {nameCloth : ['XS','S','M','L','XL','XXL']}
var price;
var tva = 20/100;

for (i=0; i<store.nameCloth.length; i++){
    price = i+10;
    store.nameCloth[i] = [store.nameCloth[i], [price, price*tva]];
}

console.log(store);


/*
Faite un input select en html et insérez à l’intérieur toutes les années depuis 1980 à nos jours. 
La dernière année devra être actualisé automatiquement avec “new Date”
*/

var today = new Date().getFullYear();
var date = 1980;
var input = document.getElementsByTagName("select")[0];

while(date <= today) {
    node = document.createElement("option");
    input.appendChild(node);
    document.getElementsByTagName("option")[document.getElementsByTagName("option").length-1].innerHTML = date;
    date++;
}
