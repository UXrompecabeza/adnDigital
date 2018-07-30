$(document).ready(function () {
    msieversion();
});


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


//HACK IE
function msieversion() {

    var input = $(".has-float-label input");
    var label = $(".has-float-label label");
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        //LABEL FLOATING
        label.addClass("label-ie");
        input.on('keyup keydown keypress change paste', function () {
            if ($(this).val() != "") {
                $(this).next().addClass("label-float-ie");
            } else {
                $(this).next().removeClass("label-float-ie");
            }
        });
    }
}




    
