const body = document.body;
const main = document.getElementById("main");

const partOne = document.createElement("div");
const partTwo = document.createElement("div");
const partThree = document.createElement("div");
partOne.setAttribute("id", "partOne");
partTwo.setAttribute("id", "partTwo");
partThree.setAttribute("id", "partThree");

const divOne = document.createElement("div");
const divTwo = document.createElement("div");
const divThree = document.createElement("div");
partOne.appendChild(divOne);
partTwo.appendChild(divTwo);
partThree.appendChild(divThree);
divOne.classList.add('content')
divTwo.classList.add('content')
divThree.classList.add('content')

const pOne = document.createElement("p");
const pTwo = document.createElement("p");
const pThree = document.createElement("p");
divTwo.appendChild(pTwo);
divThree.appendChild(pThree);
pOne.textContent = "Ola Ana Clara, tudo bem? Eu espero que sim, eu criei esse site pensando em me confessar para você na tentativa de voltar contigo, mas percebo que ainda é muito cedo para isso e tenho muito a mudar, por isso vou desabafar contigo sobre tudo que estou pensando, tudo que quero fazer para melhorar, e quero saber sua opinião de tudo. Primeiramente eu quero te falar do meu maior arrependimento, eu de verdade te peço desculpas por ter te ignorado, isso foi um erro meu e prometo jamais fazer isso de novo, como seu amigo agora eu prometo estar sempre contigo para te ajudar no que precisar, para conversar, para jogar, para trocar umas ideias e para se divertir.";
pTwo.textContent = 'Nessa seção eu quero dizer do que eu penso em fazer da vida, quero deixar o pensamento (Dê o seu melhor sempre) marcado na minha vida, por isso eu estou me esforçando nos estudo, quero começar a trabalhar, conversar mais com as pessoas e me tornar mais homem, no começo bem provável não será fácil, mas quero me tornar uma pessoa melhor, e quem sabe um dia eu compre a lua, imagina que top é ter a lua.'
pThree.textContent = 'E por fim, quero te dizer, Ana eu ainda tenho sentimentos por você, você é uma pessoa maravilhosa, esforçada, gentil, dedicada, simpática, e bom muitos outros adjetivos que eu poderia falar mas ai o site teria um bilhão de paginas, eu quero te pedir duas coisas Ana, coisas extremamente egoístas, eu quero pedir seu perdão do meu arrependimento, e a outra coisa, não precisa ser agora, mas você poderia pensar em talvez nos viver um futuro juntos, logico eu sei que agora seria impossível. Obrigado pela consideração, se precisar de qualquer ajuda saiba que eu estarei aqui por você. E por fim, algo que eu nunca disse mas, parabéns por tudo que você conquistou, parabéns por ter terminado a faculdade, parabéns por ter conseguido um emprego da sua área e parabéns pelo seus esforços diários, seja nos estudos, na ajuda na casa e nas consultas que você esta fazendo sozinha, realmente impressionante você ter cuidado daquele agapornis.'

const buttonOne = document.createElement("button");
const buttonTwo = document.createElement("button");
buttonOne.classList.add("continuar");
buttonTwo.classList.add("continuar");
buttonOne.textContent = "Continuar";
buttonTwo.textContent = "Continuar";
partOne.appendChild(buttonOne);
partTwo.appendChild(buttonTwo);

buttonOne.addEventListener("click", () => {
  pOne.style.color = "#ec4899";
  setTimeout(() => {
    partOne.remove();
    appendTwo();
  }, 2000);
});
buttonTwo.addEventListener("click", () => {
  pTwo.style.color = '#ec4899'
  setTimeout(() => {
    partTwo.remove();
    appendThree();
  }, 2000);
});

export function normal(person) {
  const home = document.getElementById("home");
  const form = document.querySelector("form");
  home.remove();
  form.remove();
  appendNormal(person);
}

function appendNormal(person) {
  const div = document.createElement("div");
  const name = document.createElement("h1");
  name.textContent = "Good day " + person;
  div.appendChild(name);
  main.appendChild(div);
}

export function especial() {
  const home = document.getElementById("home");
  const form = document.querySelector("form");
  home.remove();
  form.remove();
  setTimeout(() => {
    appendOne();
  }, 5000);
}

function appendOne() {
  main.appendChild(partOne);
  setTimeout(() => {
    partOne.style.backgroundColor = "#ec4899";
    setTimeout(() => {
      divOne.appendChild(pOne);
      setTimeout(() => {
        pOne.style.color = "black";
        pOne.style.fontSize = '25px'
      }, 1000);
    }, 3000);
  }, 2000);
}

function appendTwo() {
  main.appendChild(partTwo);
  main.style.backgroundColor = "#f9a8d4";
  setTimeout(() => {
    pTwo.style.color = 'black'
    pTwo.style.fontSize = '25px'
  }, 1000);
}

function appendThree() {
  main.appendChild(partThree);
  main.style.backgroundColor = "#b91c1c";
  setTimeout(() => {
    pThree.style.color = 'black'
    pThree.style.fontSize = '25px'
  }, 1000);
}
