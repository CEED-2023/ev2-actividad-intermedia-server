import generateName from './generators/name_generator.js';
import { departmentIterator } from './generators/departments_generator.js';

for(let i=0;i<10;i++) console.log(generateName());

const iterator = departmentIterator()
for (const element of iterator) {
  console.log(element);
}
