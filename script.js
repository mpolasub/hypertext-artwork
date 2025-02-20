const homeLink = document.getElementById('aligned-text');
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const starContainer = document.getElementsByClassName('star-container');
let winWidth = window.innerWidth;
let starPad = parseFloat(getComputedStyle(document.documentElement).fontSize)*2.5 + winWidth/2;


window.addEventListener('resize', function() {
    winWidth = window.innerWidth;
    starPad = parseFloat(getComputedStyle(document.documentElement).fontSize)*2.5 + winWidth/2;
  });



homeLink.addEventListener('mouseenter', () => {
    star1.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star1.style.paddingLeft = '70%';
    star1.style.transition = 'all 0.3s ease-in-out'

    star2.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star2.style.paddingLeft = '60%'
    star2.style.transition = 'all 0.3s ease-in-out'

    star3.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star3.style.paddingLeft = '50%'
    star3.style.transition = 'all 0.3s ease-in-out'

    star4.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star4.style.paddingLeft = '40%'
    star4.style.transition = 'all 0.3s ease-in-out'

    star5.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star5.style.paddingLeft = '30%'
    star5.style.transition = 'all 0.3s ease-in-out'

    starContainer.margin = '0 auto';
    starContainer.marginTop = '40%';
    starContainer.width = 'fit-content';
});

homeLink.addEventListener('mouseleave', () => {
    star1.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star1.style.paddingLeft = '5%';
    star1.style.transition = 'all 0.3s ease-in-out';

    star2.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star2.style.paddingLeft = '72%';
    star2.style.transition = 'all 0.3s ease-in-out';
    star5.style.paddingTop = '10%';


    star3.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star3.style.paddingLeft = '18%';
    star3.style.transition = 'all 0.3s ease-in-out';
    star5.style.paddingTop = '5%';


    star4.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star4.style.paddingLeft = '34%';
    star4.style.transition = 'all 0.3s ease-in-out';
    star5.style.paddingTop = '9%';


    star5.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star5.style.paddingLeft = '89%';
    star5.style.paddingTop = '0%';
    star5.style.transition = 'all 0.3s ease-in-out';

    starContainer.marginLeft = '0%';

});



