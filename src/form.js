import { normal } from './dom.js'

const form = document.querySelector('form')
const name = document.getElementById('name')
const main = document.getElementById('main')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(name.value)
    const randomColor = 
    Math.floor(Math.random()*16777215).toString(16);
    main.style.backgroundColor = '#' + randomColor
    main.style.transition = 'background-color 5s ease-out 0s'
    normal(name.value)
    name.value = ''
})