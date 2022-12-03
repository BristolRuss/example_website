var el = document.getElementById('overlayBtn');
if(el){
    el.addEventListener('click', swapper, false);
}

var menuToggle = document.querySelector('.three-line button'),
    menu = document.querySelector('.small-device-nav nav'),
    header = document.querySelector('.container header');

  menuToggle.addEventListener('click', function(e) {
    header.classList.toggle('shown');
    menu.classList.toggle('shown');
  })

var x = document.querySelector('.small-device-nav button'),
    menu = document.querySelector('.small-device-nav nav');

  x.addEventListener('click', function(e) {
      menu.classList.toggle('shown');
      header.classList.toggle('shown');
  })
  
var searchButton = document.querySelector('.top-nav img'),
    searchField = document.querySelector('.hero input');

    searchButton.addEventListener('click', function(e) {
      searchField.classList.toggle('shown');
    })

