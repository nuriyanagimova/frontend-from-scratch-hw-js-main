/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
   let result =''
    for (let i=0; i < str.length; i++){
        result += str[i] + str[i]
    }
        
    return result
}

// const result = doubleEachCharacter('1234')
// console.log(doubleEachCharacter('hello')) 
console.log(doubleEachCharacter('1234'));  // 'hheelllloo'






// function includesElement(array, element) {
//     const result = [];
//     for (let index = 0; index < array.length; index++) {
//         if(array[index]===element) {
//             return true;
//         }
//     }
    
//             return false;
        

// }

// function doubleEachCharacter(str) {
//     const result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!includesElement(result, str[i])) {
//             result.push(str[i] + str[i] );
//         } 
//     }
//     return result.join('') ;// нужно поместить return за пределы цикла инача он завершает выполнени функции после первого прохода цикла , как только цикл добавляет первый элемент в новый массив
// }

// const result = doubleEachCharacter('macaron')
// console.log(result);

