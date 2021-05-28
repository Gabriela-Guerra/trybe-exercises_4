let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let searchForFirstTask = tasksList[1]; /* A posição sempre começa com zero! */
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 3]; /* Não entendi muito bem!*/
console.log(searchForFirstTask);

// Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links']; /* Obter valor do array */
let menuServices = menu[1] ;
console.log(menuServices);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links']; /* Obter indice do array */
let indexOfPortfolio = menu.indexOf('Potfólio');
console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ('Contato'); /* Adiciona o valor no final da array */
console.log(menu);

console.log('-----------------------------')

let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

let cars = ["Saab", "Volvo", "BMW"]; /* Com o for */
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
};

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia']; /* Imprimir valores da lista */
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
};

console.log('-----------------------------')

// O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
let numeros = [1,2,3,4,5]; /* NumeroS da array */
for(let numero of numeros) { /* numero por numero da array */
  console.log(numero);
};

let word = 'Hello'; /* Exemplo de String */
for (let letter of word) {
  console.log(letter);
};

// Com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
};
// É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
    console.log(name);
};

console.log('-----------------------------')

// percorra o array imprimindo todos os valores nele contidos com a função console.log() 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers) {
    console.log(number);
};
// Outro exemplo
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index]; /* Preciso explicaçao melhor sobre isso */
};
console.log(result);

// calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) { /* (index menor do que a quantidade de elementos do array) */
  sum += numbers[index];
};
let average = sum / numbers.length; /* dividido pela quantidade que tem no array */
console.log(average);

// caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
result = result / numbers.length;

if (result > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
};

// DAQUI P BAIXO, PRECISO DE UMA EXPLICAÇÃO MELHOR

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}
if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
let smallestNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log(smallestNumber);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for (let index = 1; index <= 25; index += 1) {
  numbers.push(index); /* Porque utilizar o push? */
}
console.log(numbers);

// ENTENDIDO O DE BAIXO

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };
