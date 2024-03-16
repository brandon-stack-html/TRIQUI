let jugadorActual = 'X';
let tabla = ['', '', '', '', '', '', '', '', ''];
const combosGanadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function colocarMarca(indice) {
  if (tabla[indice] === '' && !comprobarGanador()) {
    tabla[indice] = jugadorActual;
    actualizarTabla();
    if (comprobarGanador()) {
      alert(`¡${jugadorActual} ha ganado!`);
    } else if (tabla.every(celda => celda !== '')) {
      alert('¡Empate!');
    } else {
      jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
      document.getElementById('turno').innerText = `Turno de: ${jugadorActual}`;
    }
  }
}

function comprobarGanador() {
  return combosGanadores.some(combo => {
    return combo.every(indice => {
      return tabla[indice] === jugadorActual;
    });
  });
}

function actualizarTabla() {
  const celdas = document.querySelectorAll('.celda');
  celdas.forEach((celda, indice) => {
    celda.innerText = tabla[indice];
  });
}

function reiniciarJuego() {
  tabla = ['', '', '', '', '', '', '', '', ''];
  jugadorActual = 'X';
  actualizarTabla();
  document.getElementById('turno').innerText = `Turno de: ${jugadorActual}`;
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarTabla();
  document.getElementById('turno').innerText = `Turno de: ${jugadorActual}`;
});
