const body = document.body;
const main = document.getElementById("main");

const partOne = document.createElement('div')
const partTwo = document.createElement('div')
const partThree = document.createElement('div')
partOne.setAttribute('id', 'partOne')
partTwo.setAttribute('id', 'partTwo')
partThree.setAttribute('id', 'partThree')

const buttonOne = document.createElement('button')
const buttonTwo = document.createElement('button')
buttonOne.textContent = 'Continuar'
buttonTwo.textContent = 'Continuar'
partOne.appendChild(buttonOne)
partTwo.appendChild(buttonTwo)

buttonOne.addEventListener('click', () => {
    partOne.remove()
    appendTwo()
})
buttonTwo.addEventListener('click', () => {
    partTwo.remove()
    appendThree()
})

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
    main.appendChild(partOne)
    setTimeout(() => {
        partOne.style.backgroundColor = '#ec4899'
    }, 2000);
}

function appendTwo(){
    main.appendChild(partTwo)
}