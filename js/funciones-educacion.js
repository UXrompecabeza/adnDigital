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
    $(".icon-menos").toggleClass("hide");
    $(".icon-mas").toggleClass("hide");
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