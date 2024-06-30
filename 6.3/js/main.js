// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const array1 = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

removeElement(array1, 2);
console.log(array1);




// Пример 2 С использованием метода filter

function removeElementTwo(array, item) {
    return array.filter(element => element !== item);
}

const array2 = [1, 2, 3, 4, 5, 6, 7];
const newArray = removeElementTwo(array2, 4);
console.log(newArray); 