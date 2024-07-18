// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
    name: "Dmitry Uvarov",
    age: 31,
    residence: "Kharkiv",
    profession: "Web Developer",

    getUserData: function() {
        return `Name: ${this.name}\n Age: ${this.age}\n Residence: ${this.residence}\n Profession: ${this.profession}`;
    },

    displayUserData: function() {
        console.log(this.getUserData());
    }
};


user.displayUserData();