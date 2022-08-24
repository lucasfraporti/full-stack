const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;

const rotaProdutos = require('./routes/routeProduto');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/produtos', rotaProdutos);

app.listen(port, () => {
    console.log(`Ativo na porta: ${port}`);
});