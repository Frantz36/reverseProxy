const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Importation des modules de logique d'inscription et d'identification
const signUpUser = require('./signup');
const loginUser = require('./login');

// Route pour l'inscription (Sign In)
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log(req);
  console.log(username);
  console.log(password);

  try {
    // Appel de la fonction d'inscription
    await signUpUser(username, password);
    res.status(200).json({ message: 'Inscription réussie !' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
  }
});

// Route pour la connexion (Login)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Appel de la fonction d'identification
    const user = await loginUser(username, password);
    if (user.length > 0) {
      res.status(200).json({ message: 'Connexion réussie !' });
    } else {
      res.status(401).json({ error: 'Identifiants invalides.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion.' });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});