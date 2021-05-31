
// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. + (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). +
// Crie uma função que mude a cor do quadrado vermelho para branco. +
// Crie uma função que corrija o texto da tag <h1>. +
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo. +
// Crie uma função que exiba o conteúdo de todas as tags <p> no console. +


let changeP = document.getElementsByTagName('p');
changeP[1].innerText = "Rico";

let changeColor = document.getElementsByClassName('main-content');
changeColor[0].style.backgroundColor = "rgb(76,164,109)";

let changeColor2 = document.getElementsByClassName('center-content');
changeColor2[0].style.backgroundColor = "white";

// let changeTitle = document.getElementsByClassName('title');
let changeTitle = document.getElementsByTagName('h1');
changeTitle[0].innerHTML = 'Exercícios 5.1 - JavaEscript';

let changeP2 = document.getElementsByTagName('p');

for(let i = 0; i < changeP2.length; i += 1){
  changeP2[i].style.fontFamily = 'Monospace';
}

for(let i = 0; i < changeP2.length; i += 1){
 console.log(changeP2[i]);
}