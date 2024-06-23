let birthYear = prompt("Введите ваш год рождения");
let age;
if (birthYear === null || birthYear.trim() === "") {
  age = "вы не указали";
} else {
  let currentYear = new Date().getFullYear();
  age = currentYear - birthYear;
}

let city = prompt("В каком городе вы живете?");
let cityMessage;
if (city === null || city.trim() === "") {
  cityMessage = "Вы не указали город проживания.";
} else {
  switch (city.toLowerCase()) {
    case "киев":
      cityMessage = "Вы живете в столице Украины.";
      break;
    case "вашингтон":
      cityMessage = "Вы живете в столице США.";
      break;
    case "лондон":
      cityMessage = "Вы живете в столице Великобритании.";
      break;
    default:
      cityMessage = `Вы живете в городе ${city}.`;
      break;
  }
}

let sport = prompt("Ваш любимый вид спорта?");
let sportMessage;
if (sport === null || sport.trim() === "") {
  sportMessage = "Вы не указали ваш любимый вид спорта.";
} else {
  switch (sport.toLowerCase()) {
    case "бильярд":
      sportMessage = "Круто! Хочешь стать как Паламарь?";
      break;
    case "баскетбол":
      sportMessage = "Круто! Хочешь стать как Майкл Джордан?";
      break;
    case "бокс":
      sportMessage = "Круто! Хочешь стать как Усик?";
      break;
    default:
      sportMessage = `Ваш любимый вид спорта - ${sport}.`;
      break;
  }
}

let finalMessage = `Ваш возраст: ${age}\n${cityMessage}\n${sportMessage}`;
alert(finalMessage);
