import randomDepartment from "./random_department.js"

function insertAtRandomPosition(arr, element) {
  const randomIndex = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(randomIndex, 0, element);
}

function addWally(company) {
  const department = randomDepartment(company)

  insertAtRandomPosition(department.employees, "Wally")
}

export default addWally
