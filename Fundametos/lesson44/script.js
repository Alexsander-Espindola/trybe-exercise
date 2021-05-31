let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Seja bem-vinda ao curso da Trybe, ' + info.personagem);
info.recorrente = "Sim";
console.log(info);
console.log();

for(let key in info){
  console.log(key);
}
console.log();
for(let key in info){
  console.log(info[key]);
}
console.log();

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'

}

console.log(info.personagem + ' ' + infoPatinhas.personagem);
console.log('Pato donald e ' + infoPatinhas.origem);
console.log(info.nota + ' e ' + infoPatinhas.nota);
console.log('Ambos recorrentes // Atenção para essa última linha!');
console.log();

function canBePalindromo(word) {
  let isPalindromo = false;
  let defautWord = word.split('');
  let reverseWord = defautWord.reverse().join('');

  if (word === reverseWord){
    isPalindromo = true;
  }

  return isPalindromo;  
}

console.log(canBePalindromo('arara'));
console.log(canBePalindromo('desenvolvimento'));

