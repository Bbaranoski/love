const body = document.body;
const main = document.getElementById("main");

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
  appendEspecial();
}

function appendEspecial() {}
