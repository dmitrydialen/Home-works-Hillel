// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let hryvnias = dollars * exchangeRate;
    console.log(`${dollars} $ = ${hryvnias} UAH`);
}
