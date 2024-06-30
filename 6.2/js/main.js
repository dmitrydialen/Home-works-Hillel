//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


let result = averageOfNumbers([1, 'a', 2, null, 3, '4', 5]);

function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;
    
    arr.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            sum += item;
            count++;
        }
    });
    
    return count === 0 ? 0 : sum / count;
}


console.log(result); 