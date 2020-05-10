let btnProperties = document.getElementById("properties");
let btnCutSpaces = document.getElementById("cutSpaces");
let btnDelText = document.getElementById("delText");
let btnUpper = document.getElementById("upper");
let btnLower = document.getElementById("lower");

let textarea = document.getElementById("textVal");

let inputNumLetters = document.getElementById("numChar");
let inputNumSpaces = document.getElementById("numSpaces");
let inputNumWords = document.getElementById("numWords");

btnProperties.addEventListener("click", () => {
	let text = textarea.value;
	let num = numCharSpacesWords(text);

	inputNumLetters.value = `N° de Caracteres: ${num.numChar}`;
	inputNumWords.value = `N° de Palavras: ${num.numWords}`;
	inputNumSpaces.value = `N° de Espaços: ${num.numSpaces}`;
});

btnCutSpaces.addEventListener("click", () => {
	let text = textarea.value;
	textNoSpaces = cutSpaces(text);
	let num = numCharSpacesWords(textNoSpaces);

	inputNumSpaces.value = `N° de Espaços: ${num.numSpaces}`;
	inputNumWords.value = `N° de Palavras: ${num.numWords}`;

  textarea.value = textNoSpaces;
});

btnDelText.addEventListener("click", () => {
	delText();
});

btnUpper.addEventListener("click", () => {
	textarea.value = textarea.value.toUpperCase();
});

btnLower.addEventListener("click", () => {
	textarea.value = textarea.value.toLowerCase();
});

function numCharSpacesWords(text){
	let palavras = text.split(' ');
	let numChar = 0;
	let numWords = 0;
	let words = [];
  let lenghtNome = 0;
  let cont = 0;

  palavras.forEach(palavra => {
  	palavra.replace(/ /g, '');

  	if(palavra == ''){
  		cont++;
  	}

  	words.push(palavra);
    numChar += palavra.length;
  });

  numWords = words.length - cont;

  numAllCharacters = text.length;
  let numSpaces = numAllCharacters - numChar;

  return {
  	numChar: numChar,
  	numSpaces: numSpaces,
  	numWords: numWords,
  }
}

function cutSpaces(text){
 	let palavra_s = text.replace(/ /g, '');

  return palavra_s;
}

function delText(){
	textarea.value = '';
}