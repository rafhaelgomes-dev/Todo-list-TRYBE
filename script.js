const caixaDeTexto = document.getElementById('texto-tarefa');
const buttonAdicona = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

// Função que adiciona as tarefas na lista
function adicionaTarefas() {
  const li = document.createElement('li');
  li.innerText = caixaDeTexto.value;
  listaDeTarefas.appendChild(li);
  caixaDeTexto.value = '';
  const itensLista = document.getElementsByTagName('li');
  for (let index = 0; index < itensLista.length; index += 1) {
    // eslint-disable-next-line no-use-before-define
    itensLista[index].addEventListener('click', mudarCorItem);
    // eslint-disable-next-line no-use-before-define
    itensLista[index].addEventListener('dblclick', riscarItem);
  }
}

buttonAdicona.addEventListener('click', adicionaTarefas);

// Função que muda cor do item ao clicar
function mudarCorItem(event) {
  const evento = event;
  const elemento = document.getElementById('color');
  if (elemento === null) {
    evento.target.id = 'color';
  } else {
    elemento.removeAttribute('id');
    evento.target.id = 'color';
  }
}

// função que risca ao clicar duas vezes no item

function riscarItem(event) {
  const evento = event;
  if (evento.target.className === 'completed') {
    evento.target.className = '';
  } else {
    evento.target.className = 'completed';
  }
}

// função que apaga todas as tarefas
const li = document.getElementsByTagName('li');
function apagarTarefas() {
  for (let index = li.length - 1; index >= 0; index -= 1) {
    li[index].remove();
  }
}

const botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagarTarefas);

const tarefasFinalizadas = document.getElementsByClassName('completed');
function apagaTarefasFinalizadas() {
  for (let index = tarefasFinalizadas.length - 1; index >= 0; index -= 1) {
    tarefasFinalizadas[index].remove();
  }
}
//
const botaApagarFinalizadas = document.getElementById('remover-finalizados');
botaApagarFinalizadas.addEventListener('click', apagaTarefasFinalizadas);

function moverParaCima() {
  const elementoColor = document.getElementById('color');
  if (elementoColor === null) {
    return;
  } if (elementoColor.id === 'color') {
    listaDeTarefas.insertBefore(elementoColor, elementoColor.previousElementSibling);
  }
}

function moverParaBaixo() {
  const elementoColor1 = document.getElementById('color');
  if (elementoColor1 === null) {
    return;
  }

  if (elementoColor1.id === 'color') {
    listaDeTarefas.insertBefore(elementoColor1.nextElementSibling, elementoColor1);
  }
}

const botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', moverParaCima);

const botaoMoverBaixo = document.getElementById('mover-baixo');
botaoMoverBaixo.addEventListener('click', moverParaBaixo);
