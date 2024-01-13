const mysql = require('mysql');

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_signup'
  });

// Fonction pour vérifier les informations d'identification de l'utilisateur
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    // Logique de vérification des informations d'identification dans la base de données
    // ...

    // Exemple : exécution d'une requête SELECT
    const query = `SELECT * FROM Users WHERE username = ? AND password = ?`;
    connection.query(query, [username, password], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = loginUser;