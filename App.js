const express = require('express');
const App = express();
const port = 3000;

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

const produtosRoute = require('./routes/produtos-routes');
App.use(produtosRoute);

App.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});