const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;


app.use(bodyParser.json()); // 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));


const pizzaRouter = require('./routes/pizza.router.js');
app.use('/api/pizza', pizzaRouter);

const orderRouter = require('./routes/order.router.js');
app.use('/api/order', orderRouter);


app.listen(port, function () {
    console.log('Listening on port: ', port);
});