// LARGO CAMPOS

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}
$('.input-cel').attr('maxLength', '9').keypress(limitMe);
$('.input-mes').attr('maxLength', '2').keypress(limitMe);
$('.input-dia').attr('maxLength', '2').keypress(limitMe);
$('.input-anno').attr('maxLength', '4').keypress(limitMe);

//SOLO LETRAS
$('.input-text').on('input', function () { 
    this.value = this.value.replace(/[^a-z]/g,'');
});

//SOLO NUMEROS
$('.input-number').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});

$(".item-star").click(function () {
    $(this).toggleClass("item-star-full");
});

