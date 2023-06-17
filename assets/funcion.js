
function mostrarFechaIda() {
  var fechaIda = document.getElementById('start').value;
  var fecha = document.getElementById('ida');
  fecha.textContent = fechaIda;
}

function mostrarFechaRegreso() {
  var fechaIda = document.getElementById('start').value;
  var fechaRegreso = document.getElementById('end').value;
  var fecha2 = document.getElementById('regreso');
  fecha2.textContent = fechaRegreso;

  if (fechaRegreso < fechaIda) {
    alert("¡La fecha de regreso no puede ser anterior a la fecha de ida!");
  }
}

var origen = "";
function mostrarOrigen() {
origen = document.getElementById('origen').value;
var lugarOrigen = document.getElementById('lugarOrigen');
lugarOrigen.textContent = origen;
}

function mostrarDestino() {
var destino = document.getElementById('destino').value;
var lugarDestino = document.getElementById('lugarDestino');
lugarDestino.textContent = destino;
var alerta = document.getElementById('alerta');


if ((origen.includes("Chicago, USA") && destino.includes("Venecia, IT")) ||
    (origen.includes("Boston, USA") && destino.includes("Paris, FR"))) {
  alerta.textContent = "¡Ojo, tu vuelo tiene 1 escala!";
} else {
  alerta.textContent = "Tu vuelo no tiene 1 escala.";
}
}

