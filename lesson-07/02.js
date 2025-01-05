// /*
//  * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
//  * Если строка является числом, функция должна возвращать true, в противном случае - false.
//  */

// function isNumeric(str) {
// if (str === " ") {
//   return false
// }
//   const num = Number(str)

//   return str !== ' ' && !Number.isNaN(num)
  
// }

// console.log(isNumeric("123")) // Ожидаемый результат: true
//  console.log(isNumeric("12.3")) // Ожидаемый результат: true
//  console.log(isNumeric("123abc")) // Ожидаемый результат: false
//  console.log(isNumeric("abc")) // Ожидаемый результат: false
//  console.log(isNumeric(" ")) // Ожидаемый результат: false



let num = 0

if (undefined) {
  num = 1
} else if ('') {
  num = 2
} else if (0) {
  num = 3
} else if ({}) {
  num = 4
} else if (false) {
  num = 5
} else {
  num = 6
}
// console.log(num);


// isEqual = typeof null === 'object'
// console.log(typeof null);

// function getExtension(filename) {
//   const dotIndex = filename.lastIndexOf(".") // метод lastIndexOf возвращает индекс последнего вхождения указанного значения
  
//   return filename.slice(dotIndex + 1 )
// }

// console.log(getExtension("example.pdf")) // Должно вывести "pdf"
// console.log(getExtension("archive.tar.gz")) // Должно вывести "gz"

// const fullDate = "2024-06-11"
// const year = fullDate.slice(0, 4)
// console.log(fullDate.slice(0, 3));

// const string = "чтение, программирование, ирландские танцы ☘"
// const hobbies = string.split(" , ") 
// console.log(hobbies);
// // должна получить ['чтение', 'программирование', 'ирландские танцы ☘']

// isEqual = typeof (typeof 1) === 'string'
// // console.log(isEqual);

// const isEqual = typeof [] === 'object'
// console.log(isEqual);

// isEqual = typeof null === 'number'
// console.log(isEqual);
// const stringToNumber = function(str){
//   const num = Number(str);
  
//   return num;
// }
// console.log(stringToNumber("1234")); // Вывод: 1234


// function numberToString(num) {
 
//  return String(num);
// }
// // console.log(numberToString(1234)); // Вывод: "1234"




// function toNumberArray(stringarray){
//   return stringarray.map(Number);
// }

// console.log(toNumberArray(["1", "2", "3", "4"])); // Вывод: [1, 2, 3, 4]

