const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KXNbLSCavaof5Skhwr5ehqqijSezDuP395qhaxoBbMwJWgXb2H9uuCBwoSQb02WgHkXHc5YsdIefYZk8W8IlVo400pFTPVgkD"
);

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total
  
  console.log("Request recieved for >>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })

})

exports.api = functions.https.onRequest(app)