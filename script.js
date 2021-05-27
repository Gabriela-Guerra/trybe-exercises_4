const name = 'Carolina';
const birthCity = 'Belo Horizonte';
let birthYear = 1989;
console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear = 2020;
console.log(birthYear);

// O erro aparece pois não pode alterar o valor atribuido de uma Constante.
birthCity = NY;
console.log(birthCity);

console.log('------------------------');

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
// Pq as Strings são objetos?
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// Não está declado o valor da variável.
let patientAge;
console.log(typeof patientAge);

// Vira String por causa das "".
patientId = '50';
console.log(typeof patientId);

let base = 5;
let altura = 8;
let area = base * altura;
console.log(area);

let perimetro = 2 * (base + altura);
console.log(perimetro);

console.log('------------------------');

let nota = 20;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
} else if (nota < 80 >= 60) {  /* Pq ao contrario >= 60 < 80 não passa como reprovado? */
    console.log('Você está na nossa lista de espera');
} else { (nota < 60);
    console.log('Você foi reprovada(o)');
};

console.log('------------------------');

// Pq não deu certo?
let seletivo = 90;

switch (seletivo) {
    case (seletivo >= 80):
        console.log('Aprovada');
        break;
    case (seletivo < 80 >= 60):
        console.log('Lista');
        break;
    case (seletivo < 60):
        console.log('Reprovada');
        break;
    default:
        console.log('Não se aplica');
        break;
}

console.log('------------------------');

let a = 5;
let b = 10;

let adiçao = a + b;
let subtraçao = a - b;
let multiplicaçao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adiçao);
console.log(subtraçao);
console.log(multiplicaçao);
console.log(divisao); /* não é um numero par, pois tem resto. */
console.log(modulo);

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

console.log('------------------------');

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
console.log('num1 é maior que num2');
} else {
    console.log('num2 é maior que num1');
}

let num1 = 10;
let num2 = 5;
let num3 = 15;

// Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
// var a1 =  true && true;     // t && t retorna true
// var a2 =  true && false;    // t && f retorna false
// var a3 = false && true;     // f && t retorna false
// var a4 = false && (3 == 4); // f && f retorna false
// var a5 = "Gato" && "Cão";   // t && t retorna Cão
// var a6 = false && "Gato";   // f && t retorna false
// var a7 = "Gato" && false;   // t && f retorna false

if (num1 > num2 && num1 > num3) { /* false && false */
    console.log('num1 é maior que num2'); 
} else if (num2 > num1 && num2 > num3) { /* false && false */
    console.log('num2 é maior que num3');
} else {
        console.log('num3 é maior que num1');
}

let num1 = 15;

if (num1 > 0) { 
    console.log('Positive'); 
} else if (num1 < 0) { 
    console.log('Negative');
} else {
        console.log('Zero');
}

// Entender melhor o enunciado!
let anguloA = 100;
let anguloB = 65;
let anguloC = 15;

let somaAngulos = anguloA + anguloB + anguloC;

let todaArea = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todaArea){
    if (somaAngulos === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }

  let num1 = 10;
  let num2 = 3;
  let num3 = 7;
  let par = true;

//   true || qualquercoisa é avaliado em curto-circuito como verdadeiro.
// var o1 =  true || true;     // t || t retorna true
// var o2 = false || true;     // f || t retorna true
// var o3 =  true || false;    // t || f retorna true
// var o4 = false || (3 == 4); // f || f retorna false
// var o5 = "Gato" || "Cão";   // t || t retorna Gato
// var o6 = false || "Gato";   // f || t retorna Gato
// var o7 = "Gato" || false;   // t || f retorna Gato

  if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
    par = false;
  };
  console.log(par);

  let num1 = 10;
  let num2 = 3;
  let num3 = 7;
  let impar = false;

  if ((num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0)) {
    impar = true;
  };
  console.log(impar);


//   Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.








