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
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(b).on('keyup keydown keypress change paste', function () {
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(c).on('keyup keydown keypress change paste', function () {
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(d).on('keyup keydown keypress change paste', function () {
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(e).on('keyup keydown keypress change paste', function () {
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });
    $(f).on('keyup keydown keypress change paste', function () {
        if( a.val() != "" && b.val() != "" && c.val() != "" && d.val() != "" && e.val() != "" && f.val() != "") {
            $(".cli-mo-step1").addClass("customNextBtn");
        }
    });


    $("#btclon").bind('click', function() {
            campo =
            campo = "<div class='item-dependiente'><div class='row accordion-row'><div class='col-lg-4 col-md-4'><div class='iptrut-area'><p class='label-area'><span class='no-view'>.</span></p><input id='rut2' type='text' name='' placeholder='RUT' class='rut'/><span>-</span><input type='text' name='' class='dv'/></div></div><div class='col-lg-4 col-md-4'><div class='iptdate-area'><p class='label-area'>Fecha de Nacimiento</p><input type='text' name='' placeholder='DD' class='date-input'/><span>-</span><input type='text' name='' placeholder='MM' class='date-input'/><span>-</span><input type='text' name='' placeholder='AAAA' class='date-input__anno'/></div></div><div class='col-lg-4 col-md-4'></div></div><div class='row accordion-row'><div class='col-lg-8 col-md-8'><div class='ipttxt-area'><input type='text' name='' placeholder='Nombre Completo'/></div></div><div class='col-lg-4 col-md-4 add-dep-input'><div class='iptselect-area'><select name=''><option value='1'>Relación</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option></select></div><div class='drop-dependiente'><img src='assets/icons/icon-trash-blue.svg' alt=''/></div></div></div></div>";
            var destino = $('.new-dependiente').append(campo);
            destino.find(".drop-dependiente").on('click', function() {
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
$('.input-rut').attr('maxLength', '8').keypress(limitMe);
$('.input-dv').attr('maxLength', '1').keypress(limitMe);


//SOLO NUMEROS
$('.input-number').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});

//CAMPO INSTITUCION

$(".rbtn-complementario input").on('keyup keydown keypress change paste', function () {
    $(".input-institucion").removeClass("hide");
});

$(".rbtn-complementario-desk input").on('keyup keydown keypress change paste', function () {
    $(".input-institucion-desk").removeClass("hide");
});




