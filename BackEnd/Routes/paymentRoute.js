const express = require('express');
const payment_route = express();

const bodyParser = require('body-parser');
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

//Modifie cette partie selon le front
payment_route.set('view engine', 'ejs');
payment_route.set('views', path.join(__dirname, '../views'));

const paymentController = require("../BackEnd/controllers/paymentController");

//De même ici, modifie cette partie selon le front
payment_route.get('/', paymentController.renderBuyPage);
payment_route.post('/payment', paymentController.payment);
payment_route.post('/success', paymentController.success);
payment_route.post('/failure', paymentController.failure);

module.exports = payment_route;