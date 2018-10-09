"use strict";
/*
Vous devez créer une fonction “myPutStr” cette fonction doit permettre de retourner un String. 
Si c’est un nombre retournez “et pourquoi pas 42 ?”.
*/

function myPutStr (string) {
    if (typeof string === 'number') {
        return 'et pourquoi pas 42 ?';
    }
    return string;
}

console.log(myPutStr('test'));
console.log(myPutStr(75));

/*
Créer une fonction “computeSurfaceM2” qui clalcul une surface en m².
*/

function computeSurfaceM2(longueur, largeur) {
    if ((typeof longueur !== 'number') || (typeof longueur !== 'number') || (longueur < 0) || (largeur < 0)) {
        return -1;
    }
    return longueur*largeur;
}

console.log(computeSurfaceM2('test',5));
console.log(computeSurfaceM2(5,5));

/*
Vous devez encapsuler le script vous permettant de détecter l’âge dans une boite de nuit dans une fonction 
“detectMyAgeByNight”. Cette fonction devra arrêter le prompt à chaque fois que vous le jugerez nécessaire.
 Cette fonction devra utiliser l’événement “click” de la souris sur un boutton html pour être déclenché. 
 Pour générer le boutton html vous deverez utiliser “creatElement”. 
 Le boutton devra bien entendu être créer dans une autre fonction du nom de “createMyButton”.
*/

function createMyButton() {
    var boutontest = document.body.appendChild(document.createElement('button'));
    boutontest.innerHTML = 'DetectMyAge';
    boutontest.addEventListener('click',detectMyAgeByNight);
}

function detectMyAgeByNight() {
    alert('test');
}

createMyButton();

/*
Créer une fonction “matrixGenerator” capable de générer une matrice en “table HTML” 
d’après un tableau à plusieurs dimensions. Exemple de tableau à 2 dimensions pour générer le HTML : 
“[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]”.
*/
document.body.ap
function matrixGenerator(tab) {
    var table = document.body.appendChild(document.createElement('table'));
    var tr,box;
    tab.forEach( function(item) {
        tr = table.appendChild(document.createElement('tr'));
        if (typeof item == 'object') {
            item.forEach( function(item2) {
                box = tr.appendChild(document.createElement('td'));
                box.innerHTML = item2;
                if(item2 == 0) {
                    box.style.color = 'white';
                    box.style.background = 'black';
                }
            })
            return;
        }
        box = tr.appendChild(document.createElement('td'));
        box.innerHTML = item;
    })
}

matrixGenerator([[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]);


/*
Vous devez réaliser une fonction capable de calculer la suite de fibonacci 
dans un tableau qui peux comprendre n index. Cette suite devra enregistrer les résultats dans un nouveau tableau. 
Vous devrez ensuite trier le tableau en ordre croissant puis additionner tout les nombres pour former un total. 
4 fonctions attendu, vous devez segmenter votre code. 
Vous devez obligatoirement utiliser une fonction récursive !
*/

function fiboInTab(indexMax){
   if (typeof indexMax != 'number' || indexMax < 1) {
       return null;
   }
   var tab = [];
   for (var i=0; i<indexMax; i++) {
       tab.push(fibo(i));
   }
   triTab(tab);
   return resulTab(tab);
}

function fibo(n){
    if(n <= 1) {
        return n;
    }
    return fibo(n-1) + fibo(n-2);
} 

function triTab(tab) {
    var i,j,temp;
    for(i=0; i<tab.length; i++){
        j=i+1;
        while (tab[j] < tab[i]) {
            temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
            j++;
        }
    }
}

function resulTab (tab) {
    var result = 0;
    tab.forEach( function (item) {
        result += item;
    })
    return result;
}

console.log(fiboInTab(42));
