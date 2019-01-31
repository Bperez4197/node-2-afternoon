const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controllers/products_controller');

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    //db.init();
}).catch(err => console.log(err));

app.get('/api/products' , controller.getAll);
app.get('/api/products/:product_id' , controller.getOne);
app.put('/api/products/:product_id' , controller.update);
app.post('/api/products' , controller.create);
app.delete('/api/products/:id' , controller.delete);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`));