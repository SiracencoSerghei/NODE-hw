const fs = require('fs/promises')
const contacts = require("./contacts");

// console.log(contacts)

// (async () => {
//     console.log(await contacts.listContacts());
//   })();

// (async () => {
//     console.log(await contacts.addContact({
//         name: 'sergio',
//         email: 'siracencoserghei@gmail.com',
//         phone: 12141618181,
//     }));
//   })();

// (async () => {
//     console.log(await contacts.getContactById("fZ_xY2AXKFGdVRurpcSRr"));
//   })();

// (async () => {
//     console.log(await contacts.removeContact("MmHzXPuFCsE8tnWSNVKIE"));
//   })();


// (async () => {
//     console.log(await contacts.updateContact('fZ_xY2AXKFGdVRurpcSRr', {
//         name: 'Sergio',
//         email: 'siracencoserghei@gmail.com',
//         phone: '004444443355555',
//     }));
//   })();