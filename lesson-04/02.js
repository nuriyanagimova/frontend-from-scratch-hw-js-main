/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
        return true; // Элемент найден
        }
    }
    return false; // Элемент не найден
}


function findUniqueElements(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!includesElement(result, array[i])) {
            result.push(array[i]);
        } 
    }
    return result ;// нужно поместить return за пределы цикла инача он завершает выполнени функции после первого прохода цикла , как только цикл добавляет первый элемент в новый массив
}



const array = [1, 2, 3, 2, 1, 4]// не забыть объявить переменную array
const result = findUniqueElements([1, 2, 3, 2, 1, 4])// не забыть передать аргумент в функцию в виде массива
console.log(result)

