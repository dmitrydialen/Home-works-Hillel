// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const contactBook = {
    contacts: [
        { name: "Dmitry Uvarov", phone: "123-456-7890", email: "dmitry@dialen.com.ua" },
        { name: "John Doe", phone: "234-567-8901", email: "john-doe@gmail.com" },
        { name: "Ivan Ivanov", phone: "345-678-9012", email: "ivan-ivanov@gmail.com" }
    ],

    findContact: function(name) {
        return this.contacts.find(contact => contact.name === name);
    },

    addContact: function(name, phone, email) {
        this.contacts.push({ name, phone, email });
    }
};


const foundContact = contactBook.findContact("Dmitry Uvarov");
if (foundContact) {
    console.log("find contact:", foundContact);
} else {
    console.log("Contact not found");
}

contactBook.addContact("Michael Jackson", "456-789-0123", "michael@gmail.com.com");

console.log("Update contacts:", contactBook.contacts); 
