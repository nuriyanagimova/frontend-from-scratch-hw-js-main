/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */


// your code
const score = 11  // тестовое значение, можно изменять
let grade 
// your code
if (  score < 49) {
    grade = 'F' // сразу же сохраняем полученный результат в переменную
    console.log('F');
    
} else if (score === 50 && score < 69) {
    grade = 'D'
    console.log('D');
    
} else if (score === 70 && score < 79) {
    grade = 'C'
    console.log('C');

} else if (score ===80 && score < 89)  {
    grade = 'B'
    console.log('B');

} else if (score === 90 && score <= 100) {
    grade = 'A'
    console.log('A');
    
} else {
    console.log('ошибка');
}
console.log(`Ваша оценка: ${grade}`);
