// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

let N = parseInt(prompt("Введите целое число: "), 10);

if (isNaN(N)) {
    console.log("Пожалуйста, введите допустимое целое число.");
} else {
    if (isPrime(N)) {
        console.log(`${N} является простым числом.`);
    } else {
        console.log(`${N} не является простым числом.`);
    }
}