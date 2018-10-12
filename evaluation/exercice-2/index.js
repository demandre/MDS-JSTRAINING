'use strict'

/*
  Creates a empty load bar (a black div which have load-bar class)
*/
function initLoadBar() {
  var div = document.createElement('div');
  div.style.height = '100px';
  div.style.width = '1000px';
  div.style.background = 'black';
  div.style.borderRadius = '10px';
  div.classList.add('load-bar');

  document.body.appendChild(div);
}

/*
  Draws progression of a loadBar in a div with load-bar class if it exists.
*/
function drawBar(sum,nbr) {
  if (nbr > sum) {
    return ('progress value must be under max value');
  }
  var fullBar = document.body.querySelector('.load-bar');

  if (fullBar === null) {
    return 'No load bar';
  }

  var fullWidth = fullBar.style.width.replace('px','');
  var fullHeight = fullBar.style.height;

  if (fullWidth === null) {
    return 'Bar width is not set';
  }
  if (fullHeight === null) {
    return 'Bar height is not set';
  }

  var progressBar = document.createElement('div');
  var progressRate = (nbr*100 / sum) / 100;

  progressBar.style.height = fullHeight;
  progressBar.style.width = (progressRate * fullWidth) + 'px';
  progressBar.style.background = 'pink';

  fullBar.innerHTML = '';
  fullBar.appendChild(progressBar);
}

initLoadBar();
var progression = 0;
var max = 100;

setInterval(function() {
  progression++;
  drawBar(max,progression);
  if (progression == max) {
    clearInterval();
  }
}, 100);
