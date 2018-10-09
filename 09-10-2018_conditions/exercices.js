"use strict";
/* Créer un algorithme capable de faire entrer dans une boîte de nuit une personne 
ayant plus de 18 ans et refusant celle qui ont entre 0 et 17. 
Utilisez “alert();” pour afficher votre message. 
Vous devez faire une concaténation avec la phrase “Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez $VALEUR” 
ou “Vous pouvez entrer vous êtes majeur vous avez $VALEUR”. 
Attention si l’âge est compris entre 42 et plus vous devenez le patron de la boite !
*/
//Exo 1

var age = 42;

if(age < 0) {
    alert('Vous ne pouvez pas entrez vous n’êtes pas né!!!');
} else if(age < 18) {
    alert('Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ' + age + ' ans!');
} else if (age >= 42) {
    alert('Bonjour patron');
} else {
    alert('Vous pouvez entrer vous êtes majeur vous avez ' + age + ' ans!');
}


/*
Créer un algorithme qui retourne : “Cool” quand la valeur est comprise entre 0 et 10.
 “Tepid” quand la valeur est comprise entre 11 et 20. 
 “Warm” quand la valeur est cormprise entre 21 et 30. 
Cette condition devra utiliser la variable “rand” avec un nombre aléatoire compris entre 0 et 30.
*/
//Exo 2

var valeur = Math.floor(Math.random()*31);

if (valeur <= 10) {
    console.log('Cool');
} else if (valeur <= 20) {
    console.log('Trepid');
} else if (valeur <= 30) {
    console.log('Warm');
}


/*
Utilisez le “switch” pour déterminer le jour de la semaine avec l’objet “Date”. 
Si nous sommes lundi vous devrez reconnaitre que nous sommes lundi est affichez “nous sommes $VALEUR”. 
Faite ça pour tout les autres jours de la semaine.
*/
//Exo 3

var today = new Date();

switch (today.getDay()) {
    case 1:
         console.log('nous sommes lundi: ' + today.getDay());
         break;
    case 2:
         console.log('nous sommes mardi: ' + today.getDay());
         break;
    case 3:
         console.log('nous sommes mercredi: ' + today.getDay());
         break;
    case 4:
         console.log('nous sommes jeudi: ' + today.getDay());
         break;
    case 5:
         console.log('nous sommes vendredi: ' + today.getDay());
         break;
    case 6:
         console.log('nous sommes samedi: ' + today.getDay());
         break;
    case 7:
         console.log('nous sommes dimanche: ' + today.getDay());
         break;
        
}



/*
Créer une histoire avec au minimum 3 fin différentes vous devez faire des “if” imbriqués. 
Vous devez utilisez la fonction “prompt”. 
Aucune autre fonction n’est autorisé. Bien entendu une des fins doit obligatoirement finir par 
“La grande réponse sur la vie, l’univers et le reste !”. 
Utilisez “window.alert()”.
*/
//Exo 4

var reponse = prompt("Bonjour! Connais-tu la réponse universelle?","oui/non/autre chose").toLowerCase();

if (reponse == 'oui') {
    reponse = prompt('Très bien Sherlock. Alors partage-la avec moi!');
    if (reponse == '42') {
        alert('La grande réponse sur la vie, l’univers et le reste !')
    } else {
        alert('Si on enlève "' + reponse + '" de ta réponse et qu\'on ajoute 42, c\'est exact.')
    }
} else if(reponse == 'non') {
    alert('Dommage pour toi.')
} else if(reponse == 'autre chose') {
    alert('Bravo. Tu es un divergent.')
} else {
    alert('Hors sujet... C\'est pourtant pas compliqué comme question.')
}


/*
Faite un “Early return” avec des boolean.
*/
//Exo 5

//On ne peut pas faire de return en dehors d'une fonction...


/*
Faite une condition ternaire qui test si une variable existe ou non. 
Si elle n’existe pas écrivez “cette variable n’existe pas” autrement écrivez “42”.
*/
//Exo 6

var test1=1;
test1?console.log('42'):console.log('Cette variable n\'existe pas');

/*
Avec un switch indiquez de quelle famille fait partie le chiffre enregistré dans une variable “familly”.
 Vous devez avoir en retour pour le chiffre “42” par exemple 
 “Ce chiffre fait partie de la famille des 40” si vous entrez “11” vous devez avoir 
 “Ce chiffre fait partie de la famille des 10” etc. Vous devez prendre en compte les chiffres de 0 à 40. 
 Vous devez optimiser votre code !
*/
//Exo 7

var family = 49;

switch (Math.floor(family/10)) {
    case 0:
        console.log('Ce chiffre fait partie de la famille des 0');
        break;
    case 1:
        console.log('Ce chiffre fait partie de la famille des 10');
        break;
    case 2:
        console.log('Ce chiffre fait partie de la famille des 20');
        break;
    case 3:
        console.log('Ce chiffre fait partie de la famille des 30');
        break;
    case 4:
        console.log('Ce chiffre fait partie de la famille des 40');
        break;
    default: 
        console.log('Ce chiffre est sans famille...');
}
