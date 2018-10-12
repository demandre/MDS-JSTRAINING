'use strict';

/*
  Draws progression of a loadBar in a div with load-bar class if it exists.
*/
function drawBar(sum,nbr) {

  if (nbr > sum) {
    return ('progress value must be under max value');
  }

  var fullBar = document.createElement('div');
  fullBar.style.height = '100px';
  fullBar.style.width = '1000px';
  fullBar.style.background = 'black';
  fullBar.style.borderRadius = '10px';

  var progressBar = document.createElement('div');
  var progressRate = (nbr*100 / sum) / 100;

  progressBar.style.height = '100px';
  progressBar.style.width = '0px';
  progressBar.style.background = 'pink';
  progressBar.style.transitionProperty = 'width';
  progressBar.style.transitionDuration = '2s';
  progressBar.style.transitionDelay = '1s';


  fullBar.appendChild(progressBar);
  document.body.appendChild(fullBar);

  var progressRate = (nbr*100 / sum) / 100;

  setTimeout(function() {
    progressBar.style.width = (progressRate * 1000) + 'px';
  },1);
}


drawBar(100,100);
