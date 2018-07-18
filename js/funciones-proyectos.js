$(document).ready(function () {
    agregarDependiente();
});

$(".link-cobertura").click(function () {
    $(".cobertura-box").toggleClass("hide");
});

function agregarDependiente() {
    var nombre = "";
    var id = 0;
    $(".link-proyecto").bind('click', function() {
        
        nombre = $(".item-proyecto select").val();
        id = ($(".tabla-desgloce tr").length);

        campo = "<tr><td scope='row'><div class='checkbox-area'><label for='checkDepen1' class='form-check-label'><input type='checkbox' name='cbxDep' id='checkDepen"+id+"' class='form-check-input'/><span class='checkmark'></span><span class='txt'>Proyecto "+id+" <br>"+ nombre +"</span></label></div></td><td><p class='black'>UF 1.500</p><p>$ 90.183.227</p></td><td><p class='black'>UF 35</p><p>$ 183.227</p></td></tr>";
        
        campo2 = "<li class='tab-tablas_item nav-item'><a href='#dep"+id+"' data-toggle='tab' role='tab' aria-controls='dep"+id+"'><p>Proyecto "+id+"</p></a></li>";

        campo3 =
        campo3= "<div id='dep"+id+"' role='tabpanel' class='tab-content tab-pane fade show active'><div class='new-item'><img src='assets/icons/icon-bienraiz.svg'/><p> "+ nombre +"</p></div><table class='table table-striped tabla-calculo'><tbody><tr><th scope='row' width='5%'> </th><td width='50%'>Monto objetivo</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'> </th><td width='50%'>Tiempo estimado</td><td width='40%'><div class='iptselect-area'><select><option value='1'>Seleccione una opción</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option><option value='1'>opcion1</option></select></div></td></tr><tr><th scope='row' width='5%'> <img src='assets/icons/icon-less-violet.svg'/></th><td width='50%'>Aporte inicial</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-less-violet.svg'/></th><td width='50%'>Monto ahorrado en otra institución</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-same-violet.svg'/></th><td width='50%'>Necesidad de ahorro</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text'/></div></td></tr><tr><th scope='row' width='5%'><img src='assets/icons/icon-divide-violet.svg'/></th><td width='50%'>Factor 2</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text' disabled='disabled'/></div></td></tr></tbody></table><table class='table tabla-calculo_total'><tbody><tr><th scope='row' width='5%'> <img src='assets/icons/icon-same-violet.svg'/></th><td width='50%'>Objetivo de ahorro mensual Dependiente 1</td><td width='40%'><div class='iptnum-area'><span>$</span><input type='text' value='183.227'/></div></td></tr></tbody></table></div>";

        $('.tabla-desgloce table tbody').append(campo);
        $('ul.tabs-proyectos').append(campo2);
        $(".tab-tablas_content").append(campo3);
        
    });
}