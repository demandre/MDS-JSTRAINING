'use strict'

/*
  Create a table of specified xAxis boxes and yAxis boxes random colored every seconds.
  Then appends this table to the body.
*/
function gridGenerator(xAxis,yAxis) {
  var table = document.createElement('table');
  var tr,td;

  for(var i=0; i < yAxis; i++) {
    tr = document.createElement('tr');
    for(var j=0; j < xAxis; j++) {
      td = document.createElement('td');
      td.style.height = '10px';
      td.style.width = '10px';
      td.style.background = 'black';

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  setInterval(function(){
        setTableRandomBackgroundColor(table);
  }, 1000);
  document.body.appendChild(table);
}

/*
  Sets random Background color for each td of a table.
*/
function setTableRandomBackgroundColor(table) {
  var hexaChars = '0123456789ABCDEF';
  var randomColor;

  table.childNodes.forEach(function(tr){
    tr.childNodes.forEach(function(td){
      randomColor = '';
      for (var i=0; i < 6; i++) {
        randomColor += hexaChars[Math.floor(Math.random() * 16)];
      }
      td.style.backgroundColor = '#' + randomColor;
    });
  });
}

gridGenerator(100,100);
