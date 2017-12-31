//inicio funcion con jquery sobre elementos de html
$(document).ready(function() {
//oculta el elemento (logo)
  $('#logo').hide();
//metodo splash entrega una imagen de bienvenida o carga 
//con tienpos de entreda y salida  para mostrar
  $("#splash").fadeIn(1000).fadeOut(5000, showMe);
//para poder mostrar el modal hay que llamrlo desdde jquery
  $('.modal').modal();
//ejecutar funcion mostrar el logo
  function showMe(){
    $('#logo').show();
  };
  });

//cuando suelte la tecla (keyup) boton input (ten) ejecutara funcion
$('#ten').keyup(function() {
//creo la variable ten (mi input) y con metdo de jquery val entrega el valor 
    var ten = $('#ten').val();
//condiciono la funcion ,si ten es exactamente igual 10 ..
    if (ten.length === 10) {
//.. entonces habilitar (boton desahilitado) quita esta clase con metodo removeClass
      $('#habilitar').removeClass("btn disabled");
//posteriormente agrega la clase que entrega color mediante el metodo addClass
      $('#habilitar').addClass("purple accent-3");
    }
//segunda condicion si ten es mayor a 10
    if (ten.length > 10) {
//vueleve la clase desahilitada para el boton habilitar
      $('#habilitar').addClass("btn disabled");
    }
  });


