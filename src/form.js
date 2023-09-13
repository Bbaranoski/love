import { normal, especial } from "./dom.js";

const form = document.querySelector("form");
const name = document.getElementById("name");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const temp = name.value.toLowerCase();
  main.style.transition = "background-color 5s ease-out 0s";
  if (temp == "ana clara tondini siebert") {
    main.style.backgroundColor = "#f472b6";
    especial();
  } else {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    main.style.backgroundColor = "#" + randomColor;
    normal(name.value);
  }
  name.value = "";
});
