let btnProperties = document.getElementById("properties");
let btnCutSpaces = document.getElementById("cutSpaces");

let textarea = document.getElementById("textVal");

let inputNumLetters = document.getElementById("numLetters");
let inputNumSpaces = document.getElementById("numSpaces");
let inputNumWords = document.getElementById("numWords");

btnProperties.addEventListener("click", () => {
	let text = textarea.value;
	let palavras = text.split(' ');
	let numLetters = 0;
	let numWords = palavras.length;

	let palavra_s = '';
  let lenghtNome = 0;

  palavras.forEach(palavra => {
    palavra_s += `${palavra}`;
    numLetters += palavra.length;
  });

  numCharacters = text.length;
  let numSpaces = numCharacters - numLetters;

	inputNumLetters.value = `N° de Letras: ${numLetters}`;
	inputNumWords.value = `N° de Palavras: ${numWords}`;
	inputNumSpaces.value = `N° de Espaços: ${numSpaces}`;
});

btnCutSpaces.addEventListener("click", () => {
	let text = textarea.value;
	let palavras = text.split(' ');
	let palavra_s = '';

	palavras.forEach(palavra => {
    palavra_s += `${palavra}`;
  });

  textarea.value = palavra_s;
});

//acertar num de palavras
//func deletar texto