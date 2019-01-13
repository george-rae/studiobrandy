;(function() {
    // event handling functions
    function handleTouchMove(e) { e.preventDefault(); }
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        eventListener = (width < 1025) ? "touchend" : "click";


    function enableScroll(el) {
        console.log('enabling swiping/scrolling on ' + el.nodeName + " " + el.classList);
        el.removeEventListener('touchmove', handleTouchMove);
    }

    function disableScroll(el) {
        console.log('disabling swiping/scrolling on ' + el.nodeName + " " + el.classList);
        el.addEventListener('touchmove', handleTouchMove, false);
    }

    // lazy scrolling function
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 59
        }, 500);
    });

    function openMenu() {
        let button = document.querySelector('.mobile-nav-button'),
            nav = document.querySelector('nav');

        // if (document.body.classList.contains('active')) {
        //     enableScroll(document.body);
        // } else {
        //     disableScroll(document.body);
        // };

        button.classList.toggle('open');
        nav.classList.toggle('nav--active');
        document.body.classList.toggle('nav--active');
        document.body.classList.toggle('active');
    }

    let button = document.querySelector('.mobile-nav-button'),
        nav_buttons = document.querySelectorAll('.nav-buttons');
    if (button) button.addEventListener('touchend', openMenu);
    if (width < 420) {
        for(let i = 0; i < nav_buttons.length; i++) {
            nav_buttons[i].addEventListener('touchend', openMenu);
        }
    }
}());
