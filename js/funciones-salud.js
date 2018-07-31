
$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
    $(".icon-menos").toggleClass("hide");
    $(".icon-mas").toggleClass("hide");
});


$(".box-result-1").click(function () {
    $(".tabla1-salud").removeClass("hide");
    $(".tabla2-salud").addClass("hide");
    $(this).children(".box-result").removeClass("box-result__regular-theme");
    $(this).children(".box-result").addClass("box-result__green-theme");
    $(".box-result-2 .box-result").addClass("box-result__regular-theme");
    $(".box-result-2 .box-result").removeClass("box-result__green-theme");
    $(".link-calculos__1").addClass("hide")
    $(".link-calculos__2").removeClass("hide")
});

$(".box-result-2").click(function () {
    $(".tabla2-salud").removeClass("hide");
    $(".tabla1-salud").addClass("hide");
    $(".box-result-1 .box-result").addClass("box-result__regular-theme");
    $(".box-result-1 .box-result").removeClass("box-result__green-theme");
    $(this).children(".box-result").removeClass("box-result__regular-theme");
    $(this).children(".box-result").addClass("box-result__green-theme");
    $(".link-calculos__1").removeClass("hide")
    $(".link-calculos__2").addClass("hide")
});

$(".link-calculos").click(function () {
    $(".icon-mas").toggleClass("hide");
    $(".icon-menos").toggleClass("hide");
    $(".tab-tablas").toggleClass("hide");
    $(".mostrar").toggleClass("hide");
    $(".ocultar").toggleClass("hide");
});

$(".link-calculos-mo").click(function () {
    $(".icon-mas").toggleClass("hide");
    $(".icon-menos").toggleClass("hide");
    $(".tab-tablas-mo").toggleClass("hide");
    $(".mostrar").toggleClass("hide");
    $(".ocultar").toggleClass("hide");
});

$(".link-cobertura-mo").click(function () {
    $(".icon-mas-cobertura").toggleClass("hide");
    $(".icon-menos-cobertura").toggleClass("hide");
    $(".tabla-cobertura").toggleClass("hide");
});

//SOLO NUMEROS
$('.input-number').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Puntos al rut y valores $

function formatNumber (n) {
    n = String(n).replace(/\D/g, "");
    return n === '' ? n : Number(n).toLocaleString("es-CL");
}
$(".addDot").on('input', function (e) {
    let element = e.target;
    let value = element.value;
    element.value = formatNumber(value);
});