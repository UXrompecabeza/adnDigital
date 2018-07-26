//CARRUSEL
$('.carrusel-perfil').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })



//BOTON NOTAS

function botonNotas() {
    $(window).scroll(function() { 
        $('.notas-container').css('top', $(this).scrollTop());
    });
}

//DATEPICKER NOTAS

jQuery(document).ready(function(){
    jQuery('.datepicker2').datepicker();
});




    
