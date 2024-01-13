const mysql = require('mysql');

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_signup'
});


// Fonction pour inscrire un nouvel utilisateur
function signUpUser(username, password) {
    console.log(username);
    console.log(password);
  return new Promise((resolve, reject) => {
    // Logique d'inscription dans la base de données
    // ...

    // Exemple : exécution d'une requête INSERT
    const query = `INSERT INTO users (name, pass) VALUES (?, ?)`;
    connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.log('error on query');
        reject(error);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}

module.exports = signUpUser;