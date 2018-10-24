'use strict';

/*
  MyMorpionXO: a simple morpion game class
*/
var MyMorpionXO = function MyMorpionXO(){
  this.playGroundData = null;
  this.xWinNumber = 0;
  this.oWinNumber = 0;
  this.round = 1;
}

/*
  Starts a morpion game
*/
MyMorpionXO.prototype.run = function() {
  this.initData();
  this.setPlayGround();
}

/*
  Sets Morpion class data
*/
MyMorpionXO.prototype.initData = function () {
  // If game isn't set (first game)
  if(this.playGroundData === null) {
    this.playGroundData = {
      'board' :
        [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
      'htmlBoard' : [],
      'turn' : 'x',
    };
    return;
  }
  // if game is already set, then reset
  this.playGroundData['board'] =
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
  this.playGroundData['htmlBoard'].forEach(function(row){
     row.forEach(function(box) {
       box.innerHTML = '';
     });
  });

  switch(this.round%2){
    case 1:
      this.playGroundData['turn'] = 'x';
      break;

    case 0:
      this.playGroundData['turn'] = 'o';
      break;
  }
};

/*
  Creates Morpion html Playground and adds event listeners
*/
MyMorpionXO.prototype.setPlayGround = function () {
  var table = document.createElement('table');
  var tr,td;

  table.style.margin = 'auto';

  for(var i=0; i < 3; i++) {
    tr = document.createElement('tr');
    this.playGroundData['htmlBoard'].push([]);
    for(var j=0; j < 3; j++) {
      td = document.createElement('td');
      td.style.height = '100px';
      td.style.width = '100px';
      td.dataset.row = i;
      td.dataset.column = j;
      this.playGroundData['htmlBoard'][i].push(td);

      td.addEventListener('click',function(e) {
        this.boxClicked(e.target.dataset.row,e.target.dataset.column);
      }.bind(this));

      switch( (j+i)%2 ) {
        case 1:
          this.playGroundData['htmlBoard'][i][j].style.background = '#dddddd';
          break;

        case 0:
          this.playGroundData['htmlBoard'][i][j].style.background = 'pink';
          break;
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  var winnerDisplay = document.createElement('div');
  var replayButton = document.createElement('button');
  var roundDisplay = document.createElement('div');
  var roundXWinsDisplay = document.createElement('div');
  var roundOWinsDisplay = document.createElement('div');

  winnerDisplay.classList.add('winner-display');

  replayButton.style.display = 'none';
  replayButton.textContent = 'Replay!';
  replayButton.addEventListener('click', function(){
    this.xWinNumber = 0;
    this.oWinNumber = 0;
    this.round = 0;
    document.body.querySelector('.winner-display').textContent = '';
    document.body.querySelector('.replay-button').style.display = 'none';
    this.newRound();
  }.bind(this));
  replayButton.classList.add('replay-button');

  roundDisplay.classList.add('round-display');
  roundXWinsDisplay.classList.add('round-x-wins-display');
  roundOWinsDisplay.classList.add('round-o-wins-display');

  roundDisplay.textContent = 'Round 1';
  roundXWinsDisplay.textContent = 'X won 0 round(s)';
  roundOWinsDisplay.textContent = 'O won 0 round(s)';

  roundDisplay.style.textAlign = 'center';
  roundDisplay.style.width = '100%';
  roundXWinsDisplay.style.textAlign = 'center';
  roundXWinsDisplay.style.width = '100%';
  roundOWinsDisplay.style.textAlign = 'center';
  roundOWinsDisplay.style.width = '100%';
  winnerDisplay.style.textAlign = 'center';
  winnerDisplay.style.width = '100%';
  replayButton.style.textAlign = 'center';
  replayButton.style.width = '100%';

  document.body.appendChild(roundDisplay);
  document.body.appendChild(roundXWinsDisplay);
  document.body.appendChild(roundOWinsDisplay);
  document.body.appendChild(table);
  document.body.appendChild(winnerDisplay);
  document.body.appendChild(replayButton);
};

/*
  Manages display and behaviour when a box is clicked
  @param int i, int j
*/
MyMorpionXO.prototype.boxClicked = function (i,j) {
  if (this.playGroundData['board'][i][j] !== 0){
        return;
  }
  this.playGroundData['board'][i][j] = this.playGroundData['turn'];
  var img= document.createElement('img');
  img.style.width = '100%';;

  switch (this.playGroundData['board'][i][j]) {
    case 'x':
      img.src = 'x.png';
      this.playGroundData['turn'] = 'o';
      break;
    case 'o':
      img.src = 'o.png';
      this.playGroundData['turn'] = 'x';
      break;
  }

  this.playGroundData['htmlBoard'][i][j].appendChild(img);

  this.checkWin();
};

/*
  Checks if a player won the round
*/
MyMorpionXO.prototype.checkWin = function () {
  var xPoints,yPoints;
  // Create objects to passe reference to next functions
  var xWin = {'value': false};
  var oWin = {'value': false};

  this.checkWinRow(xWin,oWin);
  this.checkWinColumn(xWin,oWin);
  this.checkWinDiagonal(xWin,oWin);
  this.checkWinDiagonalRev(xWin,oWin);

  if(xWin.value) {
    this.xWinNumber++;
    this.roundOver();
    return;
  }

  if(oWin.value) {
    this.oWinNumber++;
    this.roundOver();
    return;
  }

  if(this.isPlaygroundFull()) {
    this.roundOver();
    return;
  }
};

/*
  Checks if a row contains 3 same symbols
  @params Object xWin, Object oWin
*/
MyMorpionXO.prototype.checkWinRow = function (xWin,oWin) {
  var xPoints,oPoints;
  this.playGroundData['board'].forEach(function(row){
    xPoints = 0;
    oPoints = 0;
    row.forEach(function(box){
      switch (box) {
        case 'x':
          xPoints++;
          break;
        case 'o':
          oPoints++;
          break;
      }
    });
    if (xPoints === 3) {
      xWin.value = true;
    }
    if (oPoints === 3) {
      oWin.value = true;
    }
  });
};

/*
  Checks if a column contains 3 same symbols
  @params Object xWin, Object oWin
*/
MyMorpionXO.prototype.checkWinColumn = function (xWin,oWin) {
  var xPoints,oPoints;
  for (var i=0; i<3; i++){
    xPoints = 0;
    oPoints = 0;
    for(var j=0; j<3; j++){
      switch (this.playGroundData['board'][j][i]) {
        case 'x':
          xPoints++;
          break;
        case 'o':
          oPoints++;
          break;
      }
    }
    if (xPoints === 3) {
      xWin.value = true;
    }
    if (oPoints === 3) {
      oWin.value = true;
    }
  }
};

/*
  Checks if right to left diagonal contains 3 same symbols
  @params Object xWin, Object oWin
*/
MyMorpionXO.prototype.checkWinDiagonal = function (xWin,oWin) {
  var xPoints = 0;
  var oPoints = 0;
  for (var i=0; i<3; i++){
    switch (this.playGroundData['board'][i][i]) {
      case 'x':
        xPoints++;
        break;
      case 'o':
        oPoints++;
        break;
    }
  }
  if (xPoints === 3) {
    xWin.value = true;
  }
  if (oPoints === 3) {
    oWin.value = true;
  }
};

/*
Checks if left to right diagonal contains 3 same symbol
@params Object xWin, Object oWin
*/
MyMorpionXO.prototype.checkWinDiagonalRev = function (xWin,oWin) {
  var xPoints = 0;
  var oPoints = 0;
  for (var i=0; i<3; i++){
    switch (this.playGroundData['board'][i][2-i]) {
      case 'x':
        xPoints++;
        break;
      case 'o':
        oPoints++;
        break;
    }
  }
  if (xPoints === 3) {
    xWin.value = true;
  }
  if (oPoints === 3) {
    oWin.value = true;
  }
};

/*
  Checks if there is no boxes left
  @return boolean
*/
MyMorpionXO.prototype.isPlaygroundFull = function () {
  var full = true;
  this.playGroundData['board'].forEach(function(row){
     row.forEach(function(box) {
       if(box == 0) {
         full = false;
       }
     });
  });

  return full;
}

/*
  Manage end of round behaviour and checks if someone won the game
*/
MyMorpionXO.prototype.roundOver = function () {
  if (this.xWinNumber === 3) {
    this.gameOver('X');
    return;
  }
  if (this.oWinNumber === 3) {
    this.gameOver('O');
    return;
  }
  this.newRound();
};

/*
  Inits new Round
*/
MyMorpionXO.prototype.newRound = function () {
  this.round++;
  document.body.querySelector('.round-display').textContent = 'Round ' + this.round;
  document.body.querySelector('.round-x-wins-display').textContent = 'X won ' + this.xWinNumber + ' round(s)';
  document.body.querySelector('.round-o-wins-display').textContent = 'O won ' + this.oWinNumber + ' round(s)';
  setTimeout(function() {
    this.initData();
  }.bind(this),1000);
};

/*
  Displays game over blocks
  @param String winner
*/
MyMorpionXO.prototype.gameOver = function (winner) {
  document.body.querySelector('.winner-display').textContent = winner + ' a gagné la partie !';
  document.body.querySelector('.replay-button').style.display = 'block';
  this.lockBoard();
};

/*
  Locks all board boxes
*/
MyMorpionXO.prototype.lockBoard = function (){
  for(var i=0; i < 3; i++) {
    for(var j=0; j < 3; j++) {
      this.playGroundData['board'][i][j] = 'locked';
    }
  }
}


var morpion = new MyMorpionXO();
morpion.run();
