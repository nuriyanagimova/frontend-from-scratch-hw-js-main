/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = ""
  for (let index = 0; index < str.length; index++) {
    if (index === 0 || str[index - 1] === " ") {
      result += str[index].toUpperCase()
    } else {
      result += str[index]
    }
    
  }
  console.log(result);
return result
      
}
capitalizeWords("hello world from javascript"); // "Hello World From JavaScript"
    
    

    
    


