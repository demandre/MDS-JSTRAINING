'use strict';

var currentSelected = null;

function createMap(rows, matrix) {
    var i,j,title,table, box;
    
    title = document.createElement('h2');
    title.textContent = 'Memory Game : ' + rows + ' rows.';
    title.style.color = 'red';
    title.style.textAlign = 'center';
    document.body.appendChild(title);
    table = document.createElement('table');
    table.style.width = '50%';
    table.style.margin = 'auto';
    for(i = 0 ; i < rows ; i++){
        var tr = document.createElement('tr');
        tr
        for(j = 0 ; j < 4 ; j++){
            box = tr.appendChild(document.createElement('td'));
            box.textContent = matrix[i][j];
            box.style.width = '100px';
            box.style.height = '200px';
            box.style.border = '20px solid white';
            box.style.textAlign = 'center';
            box.style.background = 'black';
            box.addEventListener('click', function(e) {
                selectCard(e.target);
            });
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function selectCard(cardBox){
    var color = getColorByNumber(cardBox.textContent);

    if(currentSelected === null) {
        currentSelected = cardBox;
        cardBox.style.background = color;
        return;
    }

    if(currentSelected.textContent != cardBox.textContent){
        cardBox.style.background = color;
        setTimeout(function(){
            reBlack(cardBox);
         }, 2000);
        return;
    }
    
    currentSelected = null;
    cardBox.style.background = color;

}

function reBlack(cardBox) {
    cardBox.style.background = "black";
    currentSelected.style.background = "black";
    currentSelected = null;
}

function getColorByNumber(number){
    switch(number){
        case '0':
            return 'blue';
        case '1':
            return 'red';
        case '2':
            return 'green';
        case '3':
            return 'yellow';
        case '4':
            return 'purple';
        case '5':
            return 'pink';
        default:
            return 'gray';
    }
}

function createMapArray(rows) {
    var i,j;
    var matrix = [];
    var numbers = getCardNumbers(rows); 

    for(i = 0 ; i < rows ; i++){
        matrix.push([]);
        for(j = 0 ; j < 4 ; j++){
            matrix[i].push(getRandomCardNumber(numbers));
        }
    }
    return matrix;
}

function getCardNumbers(rows) {
    var numbers = [];
    var i;

    for(i = 0 ; i < 2*rows ; i++){
            numbers.push(i);
            numbers.push(i);
    }

    return numbers;
}

function getRandomCardNumber(numbers) {
  var number;
  var index = Math.floor(Math.random() * Math.floor(numbers.length));

  number = numbers[index];
  console.log(numbers);
  delete numbers[index];
  console.log(numbers);
  numbers.splice(index, 1);
  console.log(numbers);
  return number;
}



function newGame(rows = 3) {
    var matrix = createMapArray(rows);

    createMap(rows, matrix);
}

newGame();
