import randomName from './names.js'
import randomSurname from './surnames.js'

function generatePersonName() {
  return `${randomSurname()} ${randomSurname()}, ${randomName()}`
}

export default generatePersonName
