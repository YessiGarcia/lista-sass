var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var plantillaFinal = '';

var cargarPagina = function() {
  cargarTemas();
  $('#add-form').submit(agregarEstudiante);
};

var cargarTemas = function() {
  $.getJSON(api.url, function(topics) {
    topics.forEach(function(tema) {
      var autor = tema.author_name;
      var contenido = tema.content;
      var id = tema.id;
      var respuestas = tema.responses_count;
      plantillaFinal += plantilla.replace("__autor__", autor)
        .replace("__contenido__", contenido)
        .replace("__id__", id)
        .replace("__respuestas__", respuestas);
    });
    $('#lista-temas').html(plantillaFinal);
  });
};


var plantilla=
  '<li>__name__<input type="checkbox"</input></li>' +




var agregarEstudiante = function(e) {
  e.preventDefault();
  var autor = $('#autor').val();
  var contenido = $('#contenido').val();
  $.post(api.url, {
    author_name: autor,
    content: contenido
  }, function(response){
    $('#myModal').modal('hide');
    cargarTemas();
  });
};

$(document).ready(cargarPagina);