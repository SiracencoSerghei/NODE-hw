
const fs = require('fs/promises')
const path = require('path')


const contactsPath = path.join(__dirname, 'db/contacts.json')
// console.log(contactsPath)



// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код. Возвращает массив контактов.
  }
  
  function getContactById(contactId) {
    // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  }
  
  function removeContact(contactId) {
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact
  }