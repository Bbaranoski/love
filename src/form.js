const form = document.querySelector('form')
const name = document.getElementById('name')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(name.value)
    name.value = ''
})