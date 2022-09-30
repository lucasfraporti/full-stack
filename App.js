const express = require('express');
const routeProducts = require('./routes/routes-products');
const App = express();
const port = 3000;

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use('/api/produtos', routeProducts);

App.listen(port, () => {
    console.log(`Executando na porta ${port}`);
});