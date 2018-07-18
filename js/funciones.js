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

// HOME

$("#buscarRut").click(function() {
    $(".busqueda_resultados").show();
})
$("#cliente1").click(function() {
    $("#home-info").hide();
    $("#info-cliente1").show();
})
$("#cliente2").click(function() {
    $("#home-info").hide();
    $("#info-cliente2").show();
})

//SELECTIZE

$('#input-rut-home').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});


//DATEPICKER NOTAS

jQuery(document).ready(function(){
    jQuery('.datepicker2').datepicker();
});

//AUTOELIMINAR

$('.btdel').on('click', function() {
    $(this).parent().remove();
});
    
