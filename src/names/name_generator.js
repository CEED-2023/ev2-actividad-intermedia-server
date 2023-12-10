import randomName from './names.js'
import randomSurname from './surnames.js'

function generate() {
  return `${randomSurname()} ${randomSurname()}, ${randomName()}`
}

export default generate
