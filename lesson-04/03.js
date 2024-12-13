/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// function includesElement(array, element) {
//     const result = [];
//     for (let index = 0; index < array.length; index++) {
//         if(array[index]===element) {
//             return true;
//         }
//     }
    
//             return false;
        

// }

// function findBla1([4, 5, 8], [2, 4, 7]) {
//     const result = []
//     for(let i = 0; i < [4, 5, 8].length; i++) {
//         if(includesElement([2, 4, 7], [4, 5, 8][i])) {
//             result.push([4, 5, 8][i])
//         }
        

//     }
//     return result
// }










function findCommonElements(array1, array2) {
        const result = [];
        for (let i = 0; i <array1.length; i++ ) {
            if (includesElement(array2, array1[i])) {
                result.push(array1[i])
    
            }
            }
        
            return result;
    }
            

// const array1 = [1, 2, 3]
// const array2 = [2, 3, 4]
console.log(findCommonElements([1, 2, 3], [2, 3, 4, 5, 6])) // [2, 3]);
console.log("COUCO");
console.log(findCommonElements(['apple', 'banana', 'cherry'], ['bananaaa'])) // [2, 3]);

