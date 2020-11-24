// Water plugin click sobre el slider
$(document).ready(function() {
    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
    });

    // Typed texto animación para header

    let typed = new Typed('.text', {
        strings: ["<strong>Amamos</strong><strong class='primary'> desarrollar.</strong>", "<strong>Y</strong> <strong class='primary'>compartir!!</strong>"],
        typeSpeed: 30
      });

    // Scrollbar navbar sticky
    $(window).scroll(function() {
        let top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        } else {
            if($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
            }
        }
    });
    
});

