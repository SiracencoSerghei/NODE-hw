// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers")
const { program } = require("commander")
const contacts = require("./contacts")

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await contacts.getContactById(id)
      return console.log(contactById)

    case "add":
      const addedContact = await contacts.addContact({ name, email, phone })
      console.log(addedContact)
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id)
      console.log(removedContact)
      break;

    case "update": 
    const fullName = name.join(" ");
    const updatedContact = await contacts.updateContact(id, { name: fullName, email, phone });
    console.log(updatedContact);
    break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// with commander package =======>

program
.option("-a, --action, <type>" )
.option("-i, --id, <type>" )
.option("-n, --name, <type...>" )
.option("-e, --email, <type>" )
.option("-p, --phone, <type>" )

program.parse()

const options = program.opts()

invokeAction(options)




//  Native method ========>

// const actionIndex = process.argv.indexOf("--action")

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1]
// //   console.log(action)
//   invokeAction({action})
// }

// with yargs package =======>

// const arr = hideBin(process.argv)
// // console.log(arr)

// const { argv } = yargs(arr)
// // console.log(argv)
// invokeAction(argv)
