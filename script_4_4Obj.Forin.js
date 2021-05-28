let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
};
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.');
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' de idade.');

// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as 
// datas em que a jogadora Marta foi considerada a melhor do mundo.
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(bestInTheWorld); /* Porque não está dando certo? */

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; /* Porque não está dando certo? */
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

console.log('-------------------------------')

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Duas formas de resolver o exercício
console.log('Bem-vinda, '+ info.personagem);
console.log('Bem-vinda, '+ info['personagem']);

// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor 
// "Sim" e, em seguida, imprima o objeto no console.
//Duas formas de resolver o exercício
info.recorrente = 'Sim';
info['recorrente'] = 'Sim';
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.
for(let properties in info){
    console.log(properties);
};

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let properties in info){
    console.log(info[properties]);
};

// Agora, defina um segundo objeto com a mesma estrutura, as mesmas chaves do primeiro e os seguintes valores: 
// "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for (let properties in info) {
    if (
    info[properties] === info.recorrente &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim') {
    console.log('Ambos recorrentes');
    } else {
    console.log(info[properties] + ' e ' + info2[properties]);
    }
// }; Preciso de uma explicação!
