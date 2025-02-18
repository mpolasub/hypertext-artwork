const homeLink = document.getElementById('aligned-text');
const star = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const starContainer = document.getElementsByClassName('star-container');

homeLink.addEventListener('mouseenter', () => {
    star.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star.style.paddingLeft = '0%'
    star.style.transition = 'all 0.3s ease-in-out'

    star2.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star2.style.paddingLeft = '0%'
    star2.style.transition = 'all 0.3s ease-in-out'

    star3.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star3.style.paddingLeft = '0%'
    star3.style.transition = 'all 0.3s ease-in-out'

    star4.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star4.style.paddingLeft = '0%'
    star4.style.transition = 'all 0.3s ease-in-out'

    star5.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.7)) brightness(1.1)';
    star5.style.paddingLeft = '0%'
    star5.style.transition = 'all 0.3s ease-in-out'

    starContainer.margin = '0 auto';
    starContainer.marginTop = '5%';
    starContainer.width = 'fit-content';
});

homeLink.addEventListener('mouseleave', () => {
    star.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star.style.paddingLeft = '0%';
    star.style.transition = 'all 0.3s ease-in-out';

    star2.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star2.style.paddingLeft = '0%';
    star2.style.transition = 'all 0.3s ease-in-out';

    star3.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star3.style.paddingLeft = '0%';
    star3.style.transition = 'all 0.3s ease-in-out';

    star4.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star4.style.paddingLeft = '0%';
    star4.style.transition = 'all 0.3s ease-in-out';

    star5.style.filter = 'drop-shadow(0 0 0px transparent) brightness(1)';
    star5.style.paddingLeft = '0%';
    star5.style.transition = 'all 0.3s ease-in-out';

    starContainer.marginLeft = '0%';

});

