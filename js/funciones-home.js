
//SELECTIZE

// $('#input-rut-home').selectize({
//   plugins: ['remove_button'],
//   delimiter: ',',
//   persist: false,
//   create: function(input) {
//       return {
//           value: input,
//           text: input
//       }
//   }
// });

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
