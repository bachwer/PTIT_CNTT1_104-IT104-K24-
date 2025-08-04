// id: mã sinh viên (string)
// name: tên sinh viên (string)
// age: tuổi (number)
// scores: mảng điểm 3 môn sinh (number[])
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            resolve(answer);
        });
    });
}


class Contact {
    constructor(nameUser, phone, email) {
        this.nameUser = nameUser;
        this.email = email;
        this.phone = phone;
    }
}

class PhoneBook {
    constructor() {
        this.contacts = [];
    }

    async addContact() {
        console.log("Them lien he moi--");
        let name = await input("nameUser: ");
        let phone = await input("Phone: ");
        let email = await input("email: ");

        const newContact = new Contact(name, phone, email);
        this.contacts.push(newContact);
    }

    display() {
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. Tên: ${contact.nameUser}, SĐT: ${contact.phone}, Email: ${contact.email}`);
        });
    }


}

const myPhoneBook = new PhoneBook();




async function main(){

    await myPhoneBook.addContact()
    await myPhoneBook.addContact()
    await myPhoneBook.display();
}
main();