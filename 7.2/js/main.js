// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const result = multiply(5)(10); 

console.log(result);
