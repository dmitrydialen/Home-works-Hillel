// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const exchangeRate = 26;
const maxRate = 100;
const rateStep = 10;

for (let dollars = 10; dollars <= maxRate; dollars += rateStep) {
    let hryvnias = dollars * exchangeRate;
    console.log(`${dollars} $ = ${hryvnias} UAH`);
}
