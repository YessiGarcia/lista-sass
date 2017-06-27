var api = {
  url: 'https://laboratoria.cuadra.co:9339/api/v1/students/ '
};

var plantillaFinal = '';

var cargarPagina = function() {
  cargarLista();
};

var cargarLista = function() {
  $.getJSON(api.url, function(alumnas) {
    alumnas.forEach(mostrarAlumnas);
  });
};

var mostrarAlumnas = function(alumna) {
  var name = alumna.name;
  var pLastName = alumna.pLastName;
  var mLastName = alumna.mLastName;
  var id = alumna.id;
  plantillaFinal = plantilla.replace("__nombre__", name)
  .replace("__pLastName__", pLastName)
  .replace("__mLastName__", mLastName);

    $('#asistentes').append(plantillaFinal);
};

var plantilla=
  "<li>" +
   "<input type='checkbox'>" + 
   "__nombre__ " +
   "</li>";

$(document).ready(cargarPagina);