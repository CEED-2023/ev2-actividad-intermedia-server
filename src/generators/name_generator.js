import randomName from './names.js'
import randomSurname from './surnames.js'

function generateName() {
  return `${randomSurname()} ${randomSurname()}, ${randomName()}`
}

export default generateName
