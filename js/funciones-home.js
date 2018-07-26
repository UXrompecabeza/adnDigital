//SELECTIZE

$('#input-rut-home').selectize({
  plugins: ['remove_button'],
  delimiter: ',',
  persist: false,
  create: function(input) {
      return {
          value: input,
          text: input
      }
  }
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