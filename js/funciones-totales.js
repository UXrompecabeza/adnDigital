// LARGO CAMPOS

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}
$('.input-cel').attr('maxLength', '9').keypress(limitMe);


//SOLO NUMEROS
$('.input-number').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});

$(".item-star").click(function () {
    $(this).toggleClass("item-star-full");
});