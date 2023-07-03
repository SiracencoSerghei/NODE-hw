const users = require('./db/contacts.json')

// console.log(users)
// const text = require('./db/text.txt')
const fs = require('fs/promises')

const resultText = async () => {
    try {
      const data = await (await fs.readFile('./db/text.txt')).toString();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

//   resultText().then(data => {
//     console.log(data);
//   }).catch(error => {
//     console.error(error);
//   });
(async () => {
    try {
      const data = await resultText();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();
