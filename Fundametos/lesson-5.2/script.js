// 1. Acesse o elemento elementoOndeVoceEsta.
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeVoceEsta.parentElement;
// Com o parentNode não é possível usar o .style
pai.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let firstChildOfChild = ondeVoceEsta.firstElementChild;
firstChildOfChild.innerText = 'primeiro Filho';
//Tanto innerText quanto innerHTML funcionaram aki

// 4. Acesse o primeiroFilho a partir de pai.
let firstChild = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let firstChild2 = ondeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let textElement = ondeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);

let quartoFilho = pai.lastElementChild;
console.log(quartoFilho);