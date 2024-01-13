const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Veuillez saisir votre nom d\'utilisateur : ', (username) => {
  rl.question('Veuillez saisir votre mot de passe : ', (password) => {
    const user = {
      username: username,
      password: password
         };

      axios.post('http://localhost:3000/login', user)
        .then((response) => {
          console.log(response.data);
          rl.close();
        })
        .catch((error) => {
          console.error(error.response.data);
          rl.close();
        });
    });
  });
