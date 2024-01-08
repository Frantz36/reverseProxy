const { PBK, SK } = process.env;

const stripe = require('stripe')(SK);


// Retourn la page d'achat / payment 
const renderBuyPage = async(req, res) => {
    try {
        res.render('buy', {
            key: PBK,
            amount: 1000
        })
    } catch (error){
        console.log(error.message);
    }
}

/**
  lorsque le formulaire de paiement est soumis, la fonction payment ici stripe créer un client Stripe en utilisant
   l'adresse e-mail (stripeEmail) et le jeton de paiement (stripeToken) fournis 
   dans la requête.
   sinon elle redirige vers la page d'échec (/failure).
 */
const payment = async(req, res)=> {

    try{

        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: req.body.stripeName
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: req.body.amount,
                description: req.body.productName,
                currency: 'usd',
                customer: customer.id
            });
        })
        .then((charge) => {//Charge la page de succes de ton choix, ici j'utilise le fichier success.ejs du dossier views 
            res.redirect("/success");
        })
        .catch((err)=>{//Charge la page d'échec de ton choix, ici j'utilise le fichier failure.ejs du dossier views 
            res.rediirect("/failure");
        });

    }catch (error) {
        console.log(error.message);
    }
}

const success = async(req, res)=>{
    try {
        res.render('success');
    } catch (error) {
        console.log(error.message);
    }
}

const failure = async(req, res) => {
    try {
        res.render('failure');
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {
    renderBuyPage,
    payment,
    success,
    failure
  };
