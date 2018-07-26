$(document).ready(function () {
    verticalTracker();
    flujoPerfil();
    carruselPerfil();
});

//VERTICAL TRACKER

function verticalTracker() {
    var a = $(".pro-step-7").find("input");
    $('input').on('keyup keydown keypress change paste', function () {
        if($('input:checked')) {
            $(this).closest(".progress-step").addClass("is-complete");
            $(".progress-step" ).not( ".is-complete" ).first().css( "opacity", "1" );
            $(".progress-step" ).not( ".is-complete" ).first().find("input").removeAttr("disabled");
            if(!(a.is(':checked'))) {
                $('html, body').animate({
                    scrollTop: $( ".is-complete" ).last().offset().top
                }, 700);
            }
        }
    });
    $( ".progress-step" ).not(".pro-step-1").find("input").attr('disabled',true);
}

function flujoPerfil() {
    var a = $(".pro-step-7").find("input");
    //step 1 - desk
    $(a).on('keyup keydown keypress change paste', function () {
        if(a.is(':checked')) {
            $(".btn-perfil-desk_step1").removeAttr("disabled");
            $(".btn-perfil-desk_step1").click(function() {
                $(".perfil-step2").removeClass("hide");
                $(".perfil-movil-2").removeClass("hide");
                $(".perfil-step1").addClass("hide");
                $(".perfil-step1-mo").addClass("hide");
                $(".botonera-tab-menu").removeClass("item-disable");
            });
        }
    });
}

$(".btn-result-mo").click(function () {
    $(".perfil-step1-mo").addClass("hide");
    $(".perfil-step1").addClass("hide");
    $(".perfil-movil-2").removeClass("hide");
    $(".carrusel-perfil__result").slick('refresh');
    $(".perfil-step2").removeClass("hide");
    $(".botonera-tab-menu").removeClass("item-disable");
});

function carruselPerfil() {
    
    $('.carrusel-perfil__result').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
            }
        ]
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 2,
    //     responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
      });
}
