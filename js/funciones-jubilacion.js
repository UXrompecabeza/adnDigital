$(document).ready(function () {
    flujoJubilacion();
});

function flujoJubilacion() {
    $(".btn-jubilacion").click(function () {
        $(".table-jub").removeClass("hide");
    });

    $(".btn-jubilacion-mo").click(function () {
        $(".table-jub-mo").removeClass("hide");
        $(".jub-show-tabla").removeClass("hide");
    });

    $(".btn-jub-show-tabla").click(function () {
        $(".tab-result-jub-mo").toggleClass("hide");
        $(".icon-mas").toggleClass("hide");
        $(".icon-menos").toggleClass("hide");
        $(".mostrar").toggleClass("hide");
        $(".ocultar").toggleClass("hide");
    });
}


$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
});


$(".box-result-1").click(function () {
    $(".tabla1").removeClass("hide");
    $(".tabla2").addClass("hide");
    $(this).children(".box-result").addClass("box-result__red-theme");
    $(this).children(".box-result").removeClass("box-result__regular");
    $(this).children(".box-result-details").addClass("box-result-details__red-theme");
    $(".box-result-2").children(".box-result").removeClass("box-result__red-theme");
    $(".box-result-2").children(".box-result").addClass("box-result__regular");
    $(".box-result-2").children(".box-result-details").removeClass("box-result-details__red-theme");
    
    $(this).children(".box-result").removeClass("box-result__regular-theme");
    $(this).children(".box-result-details").removeClass("box-result-details__regular-theme");
    $(".box-result-2").children(".box-result").addClass("box-result__regular-theme");
    $(".box-result-2").children(".box-result-details").addClass("box-result-details__regular-theme");
});



$(".box-result-2").click(function () {
    $(".tabla1").addClass("hide");
    $(".tabla2").removeClass("hide");
    $(this).children(".box-result").addClass("box-result__red-theme");
    $(this).children(".box-result").removeClass("box-result__regular");
    $(this).children(".box-result-details").addClass("box-result-details__red-theme");
    $(".box-result-1").children(".box-result").removeClass("box-result__red-theme");
    $(".box-result-1").children(".box-result").addClass("box-result__regular");
    $(".box-result-1").children(".box-result-details").removeClass("box-result-details__red-theme");
    
    $(this).children(".box-result").removeClass("box-result__regular-theme");
    $(this).children(".box-result-details").removeClass("box-result-details__regular-theme");
    $(".box-result-1").children(".box-result").addClass("box-result__regular-theme");
    $(".box-result-1").children(".box-result-details").addClass("box-result-details__regular-theme");
});