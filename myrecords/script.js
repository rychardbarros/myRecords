const form = document.querySelector('#formRecords')
const library = new NLWSetup(form)

const date = {
    study: ['01-23', '01-24', '01-25'],
    water: ['01-23', '01-24', '01-25'],
    pedal: ['01-23', '01-24', '01-25']
}

library.setData(date)
