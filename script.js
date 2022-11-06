exibir = document.getElementById('exibir');
const notas = [6.7, 3.2, 9.6, 8.7, 10, 7.5];
const notasB = [...notas];

exibir.innerHTML += notas;
exibir.innerHTML += "<br>"
exibir.innerHTML += notasB;
exibir.innerHTML += "<br>"
exibir.innerHTML += notasB.length;
exibir.innerHTML += "<br>"
exibir.innerHTML += notas.slice(2, 4);
exibir.innerHTML += "<br>"
exibir.innerHTML += notas.sort()

