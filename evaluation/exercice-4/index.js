'use strict';

/*
  Adds events on svg map in order to fill coutries and display their names
  when hovering them.
*/
function renderWorldMap() {
  document.querySelector('object').addEventListener('load', function() {
    var map = this.getSVGDocument();
    var paths = map.querySelectorAll('path');
    var countryDisplayer = document.querySelector('.country');
    paths.forEach(function(path){
      path.addEventListener('mouseenter', function(e){
        if(e.target.getAttribute('fill') !== 'red'){
          e.target.setAttribute('fill', 'blue');
        }
        countryDisplayer.textContent = e.target.id;
      });
      path.addEventListener('mouseleave', function(e){
        if(e.target.getAttribute('fill') !== 'red'){
          e.target.setAttribute('fill', '');
        }
        countryDisplayer.textContent = '';
      });
      path.addEventListener('click', function(e){
          e.target.setAttribute('fill', 'red');

      });
    });
});
}

renderWorldMap();
