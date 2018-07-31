$(document).ready(function () {
    agregarDependiente();
    flujoProyecto();
});

$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
    $(".icon-menos").toggleClass("hide");
    $(".icon-mas").toggleClass("hide");
});

function flujoProyecto() {
    $(".verProyecto").click(function () {
        $("#tablaProyecto").toggleClass("hide-sm");
        $(".icon-mas").toggleClass("hide");
        $(".icon-menos").toggleClass("hide");
        $(".mostrar").toggleClass("hide");
        $(".ocultar").toggleClass("hide");
    });
}

function agregarDependiente() {
    var nombre = "";
    var id = 0;
    $(".link-proyecto").bind('click', function() {
        
        nombre = $(".item-proyecto select").val();
        id = ($(".tabla-desgloce tr").length);

        campo = "<tr><td scope='row'><div class='checkbox-area'><label for='checkDepen1' class='form-check-label'><input type='checkbox' name='cbxDep' id='checkDepen"+id+"' class='form-check-input'/><span class='checkmark'></span><span class='txt'>Proyecto "+id+" <br>"+ nombre +"</span></label></div></td><td><p class='black'>UF 1.500</p><p>$ 90.183.227</p></td><td><p class='black'>UF 35</p><p>$ 183.227</p></td></tr>";
        
        campo2 = "<li class='tab-tablas_item nav-item'><a href='#dep"+id+"' data-toggle='tab' role='tab' aria-controls='dep"+id+"'><p>Proyecto "+id+"</p></a></li>";

        campo3 =
        campo3= "<div id='dep"+id+"' role='tabpanel' class='tab-content tab-pane fade show active'><div class='new-item'><img src='assets/icons/icon-bienraiz.svg'/><p> "+ nombre +"</p></div><table class='table table-striped tabla-calculo'><tbody><tr><th scope='row' width='5%'> </th><td class='table-col_left'>Monto objetivo</td><td class='table-col_right'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'> </th><td class='table-col_left'>Tiempo estimado</td><td class='table-col_right'><div class='iptselect-area'><select><option value='1'>Seleccione una opción</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option></select></div></td></tr><tr><th scope='row' width='5%'> <img src='assets/icons/icon-less-violet.svg'/></th><td class='table-col_left'>Aporte inicial</td><td class='table-col_right'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-less-violet.svg'/></th><td class='table-col_left'>Monto ahorrado en otra institución</td><td class='table-col_right'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-same-violet.svg'/></th><td class='table-col_left'>Necesidad de ahorro</td><td class='table-col_right'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-divide-violet.svg'/></th><td class='table-col_left'>Factor 2</td><td class='table-col_right'><div class='iptnum-area'><span>$</span><input type='text' disabled='disabled'/></div></td></tr></tbody></table><table class='table tabla-calculo_total'><tbody><tr><th scope='row' width='5%'> <img src='assets/icons/icon-same-violet.svg'/></th><td width='50%'>Objetivo de ahorro mensual Dependiente 1</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text' value='183.227'/></div></td></tr></tbody></table></div>";

        $('.tabla-desgloce table tbody').append(campo);
        $('ul.tabs-proyectos').append(campo2);
        // $(".tab-tablas_content").append(campo3);
        
    });
}

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