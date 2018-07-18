
$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
});


$(".box-result-1").click(function () {
    $(".tabla1-salud").removeClass("hide");
    $(".tabla2-salud").addClass("hide");
    $(this).removeClass("box-result__regular-theme");
    $(this).addClass("box-result__green-theme");
    $(".box-result-2").addClass("box-result__regular-theme");
    $(".box-result-2").removeClass("box-result__green-theme");
});

$(".box-result-2").click(function () {
    $(".tabla2-salud").removeClass("hide");
    $(".tabla1-salud").addClass("hide");
    $(".box-result-1").addClass("box-result__regular-theme");
    $(".box-result-1").removeClass("box-result__green-theme");
    $(this).removeClass("box-result__regular-theme");
    $(this).addClass("box-result__green-theme");
});

$(".link-calculos").click(function () {
    $(".icon-mas").toggleClass("hide");
    $(".icon-menos").toggleClass("hide");
    $(".tab-tablas").toggleClass("hide");
    $(".mostrar").toggleClass("hide");
    $(".ocultar").toggleClass("hide");
});

$(".link-cobertura-mo").click(function () {
    $(".tabla-cobertura").toggleClass("hide");
});