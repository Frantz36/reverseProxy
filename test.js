const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const mysql = require('mysql');

chai.use(chaiHttp);

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'votre_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'votre_base_de_données'
});

describe('API de Sign In et Login', () => {
  beforeEach((done) => {
    // Nettoyage de la base de données avant chaque test
    connection.query('DELETE FROM users', (error, results) => {
      done();
    });
  });

  describe('POST /signup', () => {
    it('devrait inscrire un nouvel utilisateur', (done) => {
      const user = {
        username: 'john_doe',
        password: 'password123'
      };

      chai.request('http://localhost:3000')
        .post('/signup')
        .send(user)
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Inscription réussie !');
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('devrait connecter l\'utilisateur avec des identifiants valides', (done) => {
      const user = {
        username: 'john_doe',
        password: 'password123'
      };

      // Préparation : inscrire un nouvel utilisateur pour le test de connexion
      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], (error, results) => {
        chai.request('http://localhost:3000')
          .post('/login')
          .send(user)
          .end((error, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql('Connexion réussie !');
            done();
          });
      });
    });

    it('ne devrait pas connecter l\'utilisateur avec des identifiants invalides', (done) => {
      const user = {
        username: 'john_doe',
        password: 'wrong_password'
      };

      // Préparation : inscrire un nouvel utilisateur pour le test de connexion
      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], (error, results) => {
        chai.request('http://localhost:3000')
          .post('/login')
          .send(user)
          .end((error, res) => {
            res.should.have.status(401);
            res.body.should.have.property('error').eql('Identifiants invalides.');
            done();
          });
      });
    });
  });
});