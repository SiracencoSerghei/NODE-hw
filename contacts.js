const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

// console.log(__dirname)
const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log(contactsPath)

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts()
  const result = contacts.find(item => item.id === contactId)
  return result || null
}

async function addContact(contact) {

  const contacts = await listContacts()
  const newContact = {
    id: nanoid(),
    ... contact,
  }
  contacts.push(newContact)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return contact
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [contactForDelete] = contacts.splice(index, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return contactForDelete
  }

  async function updateContact(id, newContact) {

    const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...newContact}
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  console.log(contacts)
  console.log('hello')
  return contacts[index]
  }

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
