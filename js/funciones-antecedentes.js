$(document).ready(function () {
    flujoCliente();
});

function flujoCliente() {
    var a = $(".step1_rut");
    var b = $(".step1_dv");
    var c = $(".step1_name");
    var d = $(".step1_apellido");
    var e = $(".step1_tel");
    var f = $(".step1_email");
    var x = $("#step-1").find("input");
    //step 1 - movil
    $(a).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(b).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(c).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(d).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(e).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(f).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
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


    $("#btclon").bind('click', function () {
        var id = $(".item-dependiente").length;
        campo =
            campo = "<div class='item-dependiente'><div class='row accordion-row'><div class='col-12'></div><div class='col-lg-7 col-md-7'><div class='input-group'><div class='has-float-label ipttxt-area'><input class='input-text' id='ac-d-name-"+id+"'  type='text' placeholder=''/><label for='ac-d-name-"+id+"'>Nombre completo</label></div></div></div><div class='col-lg-5 col-md-5'><div class='iptselect-area_relacion'><select name=''><option value='1'>Relación</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option></select></div><div class='drop-dependiente'><img src='assets/icons/icon-trash-blue.svg'/></div></div></div><div class='row accordion-row__label'><div class='col-lg-4 col-md-4'><div class='input-group'><div class='has-float-label iptrut-area required iptselect-area-alter'><input class='rut input-rut' id='rut3' type='text' name='' placeholder=''/><label for='rut3'>RUT</label><p class='guion_copy'>-</p><input class='input-dv dv' type='text' name=''/></div></div></div><div class='col-lg-4 col-md-4'><div class='iptdate-area required required__label'><p class='label-area'>Fecha de Nacimiento</p><input class='input-dia date-input input-number' type='text' name='' placeholder='DD'/><span class='span-guion'>-</span><input class='input-mes date-input input-number' type='text' name='' placeholder='MM'/><span class='span-guion'>-</span><input class='input-anno date-input__anno input-number' type='text' name='' placeholder='AAAA'/></div></div><div class='col-lg-4 col-md-4'></div></div></div>";
        var destino = $('.new-dependiente').append(campo);
        destino.find(".drop-dependiente").on('click', function () {
            $(this).parent().parent().parent(".item-dependiente").remove();
        });
        msieversion();

    });
    $("#btclon-mo").bind('click', function () {
        campo =
            campo = "<div class='item-dependiente'><div class='panel-body'><div class='input-group'><div class='has-float-label ipttxt-area'><input class='input-text' id='ac-d-name-mo' type='text' placeholder=''/><label for='ac-d-name-mo'>Nombre completo</label></div></div><div class='fake-br_sm'></div><div class='iptselect-area_relacion'><select name=''><option value='1'>Relación</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option></select></div><div class='input-group'><div class='has-float-label iptrut-area required iptselect-area-alter'><input class='rut input-rut' id='rut4' type='text' name='' placeholder=''/><label for='rut4'>RUT</label><p class='guion_copy'>-</p><input class='input-dv dv' type='text' name=''/></div></div><div class='iptdate-area'><p class='label-area'>Fecha de Nacimiento</p><input class='input-number input-dia date-input' type='text' name='' placeholder='DD'/><span class='span-guion'>-</span><input class='input-number input-mes date-input' type='text' name='' placeholder='MM'/><span class='span-guion'>-</span><input class='input-number input-anno date-input__anno' type='text' name='' placeholder='AAAA'/><div class='drop-dependiente'><img src='assets/icons/icon-trash-blue.svg'/></div></div></div></div>";
        var destino = $('.new-dependiente-mo').append(campo);
        destino.find(".drop-dependiente").on('click', function () {
            $(this).parent().parent().parent(".item-dependiente").remove();
        });

    });
}




$(".cli-mo-step5").click(function () {
    $(".cliente-movil").addClass("hide");
    $(".cliente-desk").addClass("hide");
    $(".cliente-resultado").removeClass("hide");
});

$(".btn-cliente-result").click(function () {
    $(".cliente-desk").addClass("hide");
    $(".cliente-movil").addClass("hide");
    $(".cliente-resultado").removeClass("hide");
});

// LARGO CAMPOS

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}
$('.input-cel').attr('maxLength', '9').keypress(limitMe);
$('.input-mes').attr('maxLength', '2').keypress(limitMe);
$('.input-dia').attr('maxLength', '2').keypress(limitMe);
$('.input-anno').attr('maxLength', '4').keypress(limitMe);
$('.input-rut').attr('maxLength', '10').keypress(limitMe);
$('.input-dv').attr('maxLength', '1').keypress(limitMe);


//SOLO NUMEROS
$('.input-number').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

//SOLO LETRAS
$('.input-text').on('input', function () {
    this.value = this.value.replace(/[^a-z]/g, '');
});
//CAMPO INSTITUCION

$(".rbtn-complementario input").on('keyup keydown keypress change paste', function () {
    $(".input-institucion").removeClass("hide");
});

$(".rbtn-complementario-desk input").on('keyup keydown keypress change paste', function () {
    $(".input-institucion-desk").removeClass("hide");
});

// VALIDACIONES

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





