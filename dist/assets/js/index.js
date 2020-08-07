const ipad = window.matchMedia('screen and (max-width: 768px)');
const menuMb = document.querySelector('.m-itemContent');
const burgerButton = document.querySelector('#burger');
const burgerOut = document.querySelector('#burgerOut');
const boxShadow = document.querySelector('.o-navFixedContainer');
const bookmark = document.querySelector('#upBookmark');

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
    else {
        burgerButton.removeEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
}

validation(ipad);

function hideShow() {
    if (menuMb.classList.contains('-isActive')) {
        menuMb.classList.remove('-isActive');
    } else {
        menuMb.classList.add('-isActive');
    }
}

$(window).scroll(() => {
    if ($(".o-nav").offset().top < 30) {
      $(".o-navFixedContainer").removeClass(`a-boxShadowMenu`);
    }
  });

  $(window).scroll(function() {
    if ($(".o-nav").offset().top >= 30) {
        $(".o-navFixedContainer").addClass(`a-boxShadowMenu`);
    }
  });


function mostrarPestana(n){
    var pestanas = document.getElementsByClassName("m-tabs__topic");
    var cabecera = document.getElementsByClassName("m-tabs__item");
    for(i = 0; i<pestanas.length; i++){
        if(pestanas[i].className.includes("-isActive")){
            pestanas[i].className = pestanas[i].className.replace("-isActive", "");
            cabecera[i].className = cabecera[i].className.replace("-isActive", "");
            break;
        }
    }
    pestanas[n].className += " -isActive";
    cabecera[n].className += " -isActive";
}
