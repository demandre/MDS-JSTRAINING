'use strict';

/*
  Calculates notes array average
*/
function computeNotes(notesArray) {
  var sum = 0;

  notesArray.forEach(function (note) {
    sum+=note;
  });

  var result = sum/notesArray.length;

  return result;
}

function testResult() {
  document.querySelector('.result').textContent = computeNotes([10, 13, 13, 12, 15, 12, 11, 16, 14]);
}
