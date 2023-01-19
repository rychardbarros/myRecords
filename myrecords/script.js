const form = document.querySelector("#form-habits")
const library = new NLWSetup(form)

const data = {
  study: ["01-23", "01-24", "01-25", "01-26", "01-27"],
  water: ["01-23"],
  pedal: ["01-23"],
}

library.setData(data)
library.load()
