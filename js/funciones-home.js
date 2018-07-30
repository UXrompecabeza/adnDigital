$(document).ready(function () {
  msieversion();
});

$(".cliente1").click(function() {
  $("#home-info").hide();
  $("#info-cliente1").show();
  $("#buscarADN").show();
})

$(".cliente2").click(function() {
  $("#home-info").hide();
  $("#info-cliente2").show();
  $("#buscarADN").show();
})

$("#buscarRut").click(function() {
  $(".busqueda_resultados").show();
})

// Puntos al rut

function formatNumber (n) {
  n = String(n).replace(/\D/g, "");
  return n === '' ? n : Number(n).toLocaleString("es-CL");
}
$(".addDot").on('input', function (e) {
  let element = e.target;
  let value = element.value;
  element.value = formatNumber(value);
});

// LARGO CAMPOS

function limitMe(e) {
  if (e.keyCode == 8) { return true; }
  return this.value.length < $(this).attr("maxLength");
}
$('.input-rut').attr('maxLength', '10').keypress(limitMe);
$('.input-dv').attr('maxLength', '1').keypress(limitMe);


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
