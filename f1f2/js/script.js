$(document).ready(function(){
    // Menú Responsive
    $('aside#menu-movil').css('left','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main, footer').animate({
            left: 290,
            opacity: 0.15
        },300,'easeOutExpo');

        event.preventDefault();
    });

    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main, footer').animate({
            left: 0,
            opacity: 1
        },300,'easeOutExpo');

        event.preventDefault();
    });



    /*  Función para detectar Scroll Down */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
            $('header').removeClass('transparente');
            $('header').addClass('gris');

            $('a#abrir').removeClass('blanco');
            $('a#abrir').addClass('azul');

        } else {
            $('header').removeClass('gris');
            $('header').addClass('transparente');

            $('a#abrir').removeClass('azul');
            $('a#abrir').addClass('blanco');

        }
    });


    
    /* Activador de Slick Slider */
    $('.slick-inicio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        fade: true,
        infinite: true
    });



    // Función de Abrir y Cerrar Pop-Up
    // Setters (SET) y Getters (GET)
    $('#cerrar-popup').click(function(){
        $('aside#pop-up').hide();
        event.preventDefault();
    });

    $('aside#pop-up').delay(1000).show(100);
});