const form = document.querySelector("#form-habits")
const library = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = library.dayExists(today)

  if (dayExists){
    alert('Dia já incluso ⛔')
    return
  }

  alert('Dia adicionado com sucesso ✔')
  library.addDay(today)
}

function save(){
  localStorage.setItem('records@key', JSON.stringify(library.data))
}

const data = JSON.parse(localStorage.getItem('records@key')) || {}
library.setData(data)
library.load()
