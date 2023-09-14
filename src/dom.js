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

const pOne = document.createElement("p");
const pTwo = document.createElement("p");
const pThree = document.createElement("p");
divTwo.appendChild(pTwo);
divThree.appendChild(pThree);
pOne.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
pTwo.textContent = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
pThree.textContent = 'ccccccccccccccccccccccccccccccc'

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
      }, 1000);
    }, 3000);
  }, 2000);
}

function appendTwo() {
  main.appendChild(partTwo);
  main.style.backgroundColor = "#f9a8d4";
  setTimeout(() => {
    pTwo.style.color = 'black'
  }, 1000);
}

function appendThree() {
  main.appendChild(partThree);
  main.style.backgroundColor = "#b91c1c";
  setTimeout(() => {
    pThree.style.color = 'black'
  }, 1000);
}
