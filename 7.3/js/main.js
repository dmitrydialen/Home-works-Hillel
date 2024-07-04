// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function promptForNumber() {
    let number;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        number = prompt("Please enter a number greater than 100:");

        if (number === null) {
            console.log("User cancelled the prompt.");
            return;
        }

        number = Number(number);

        if (number >= 100) {
            console.log("You entered:", number);
            return;
        } else {
            attempts++;
            if (attempts === maxAttempts) {
                console.log("You reached the maximum number of attempts. Last entered value:", number);
            }
        }
    }
}

promptForNumber();
