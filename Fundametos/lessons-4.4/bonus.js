function numbersRomanos () {
  let word = 'CDXLIX';
  word.split('');
  let numberRomano = null;
  for(let index = 0 ; index < word.length; index += 1 ){
    switch(word[index]){
      case 'I': 
       if (word[index + 1] === 'X' || word[index + 1] === 'V' ){
        numberRomano -= 1;
       } else {
         numberRomano += 1;
       }
      break;
      case 'V':
        numberRomano += 5;
      break;
      case 'X':
        if( word[index + 1] === 'L' || word[index + 1] === 'C'){
          numberRomano -= 10;
        } else {
          numberRomano += 10;
        }
  
       break;
      case 'L':
        numberRomano += 50;
  
      break;  
      case 'C': 
        if(word[index + 1] === 'D' || word[index + 1] === 'M'){
          numberRomano -= 100;
        } else {
          numberRomano += 100;
        }
       break;
      case 'M':
        numberRomano += 1000;
  
      break;
  
      default:
        console.log('Adicione um número Romano');
    }
  }
  return numberRomano;
}
console.log(numbersRomanos());

function arrayOfNumbers () {
  let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
  for (let evenNumber in vector){
    console.log(evenNumber);
  }
}