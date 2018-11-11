'use strict';

/*
Battleship: a simple battleship game class
@params array board
*/
var Battleship = function Battleship(board){
this.board = board;
this.infobox = document.querySelector('#info');
this.torpilleurHits = 0;
this.sousMarinHits = 0;
this.croiseurHits = 0;
this.porteAvion1Hits = 0;
this.porteAvion2Hits = 0;
}

/*
  Shots a box and verifies if a ship was hit
  @params int x, int y, Object element
*/
Battleship.prototype.shot = function(x,y,element) {

  removeListeners(element);
  if(this.board[y][x] == 0){
    element.style.backgroundColor = 'blue';
    this.infobox.textContent = 'Vous n\'avez rien touché...'
    return;
  }
  element.style.backgroundColor = 'red';
  switch (this.board[y][x]) {
    case 1:
    this.infobox.textContent = 'Vous avez touché un torpilleur!';
    this.torpilleurHits++;
    if(this.torpilleurHits == 2) {
      this.infobox.textContent = 'Vous avez coulé un torpilleur!';
      document.querySelector('#torpilleur').style.color = 'red';
    }
    break;

    case 2:
    this.infobox.textContent = 'Vous avez touché un sous-marin!';
    this.sousMarinHits++;
    if(this.sousMarinHits == 3) {
      this.infobox.textContent = 'Vous avez coulé un sous-marin!';
      document.querySelector('#sous-marin').style.color = 'red';
    }
    break;

    case 3:
    this.infobox.textContent = 'Vous avez touché un croiseur!';
    this.croiseurHits++;
    if(this.croiseurHits == 4) {
      this.infobox.textContent = 'Vous avez coulé un croiseur!';
      document.querySelector('#croiseur').style.color = 'red';
    }
    break;

    case 4:
    this.infobox.textContent = 'Vous avez touché un porte-avion!';
    this.porteAvion1Hits++;
    if(this.porteAvion1Hits == 5) {
      this.infobox.textContent = 'Vous avez coulé un porte-avion!';
      document.querySelector('#porte-avion-1').style.color = 'red';
    }
    break;

    case 5:
    this.infobox.textContent = 'Vous avez touché un porte-avion!';
    this.porteAvion2Hits++;
    if(this.porteAvion2Hits == 5) {
      this.infobox.textContent = 'Vous avez coulé un porte-avion!';
      document.querySelector('#porte-avion-2').style.color = 'red';
    }
    break;

  }
  this.checkWin();
}

/*
  Checks if players wins
*/
Battleship.prototype.checkWin = function() {
  if (this.torpilleurHits == 2 && this.sousMarinHits == 3 && this.croiseurHits == 4 && this.porteAvion1Hits == 5 && this.porteAvion2Hits == 5) {
    this.infobox.textContent = 'Vous avez gagné!';
    removeEveryTdListeners();
  }
}

/*
  Calls removeListeners for every Td of document
*/
function removeEveryTdListeners () {
  document.querySelectorAll('td').forEach(function(node) {
    removeListeners(node);
  });
}

/*
  Removes onclick, onmouseover and onmousout listeners of element given
  @param Object element
*/
function removeListeners(element) {
    element.onmouseover='';
    element.onmouseout='';
    element.onclick='';
}

var battleship = new Battleship(
  [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
);
