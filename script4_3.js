// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. 
// Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index]; /* Preciso explicaçao melhor sobre isso */
};
console.log(soma);

if (soma > 15) {
    console.log(soma);
} else {
    console.loge('valor menor que 16');
};

console.log('------------------------------------');

// faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
let n = 10; /* O lado do quadrado tem 10 * */
let symbol = '*';
let inputLine = ''; /* Espaços entre cada simbolo */
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol; /* Concatenar? */
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine); /* Porque dois FOr e não um For dentro do outro? */
};

// faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let size = 5;
let symbol = '*';
let inputLine = '';
for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol; /* Pq esse ficou trinagulo se é praticamente a mesma do quadrado? */
};

// Agora inverta o lado do triângulo.
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
// Preciso de uma explicação maior, pq For dentro do For? como isso ocorreu?

// Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
// Preciso de uma explicação maior.