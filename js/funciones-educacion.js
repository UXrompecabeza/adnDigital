$(document).ready(function () {
    flujoEducacion();
});

function flujoEducacion() {
    $(".verEducacion").click(function () {
        $("#ahorrototal").toggleClass("hide-sm");
        $(".icon-mas").toggleClass("hide");
        $(".icon-menos").toggleClass("hide");
        $(".mostrar").toggleClass("hide");
        $(".ocultar").toggleClass("hide");
    });
}

$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
});