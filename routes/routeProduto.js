const express = require('express');
const router = express.Router();

/* =============================================================== */

let result = [
    {
        id: 1,
        name: 'Nome do produto número 1',
        description: 'Descrição do produto número 1',
        price: 100,
        status: 1
    },
    {
        id: 2,
        name: 'Nome do produto número 2',
        description: 'Descrição do produto número 2',
        price: 250,
        status: 10
    },
    {
        id: 3,
        name: 'Nome do produto número 3',
        description: 'Descrição do produto número 3',
        price: 950,
        status: 100
    }
];

/* =============================================================== */

// Mostrando todos os produtos
router.get('/', function (req, res){
    const response = {
        total_products: result.length,
        products: result.map(product => {
            return{
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                status: product.status
            };
        })
    };
    return res.status(200).send(response);
});

// Mostrando um produto específico pelo id
router.get('/:id', function (req, res){
    let id_produto = Number(req.params.id);
    const response = {
        produto: result.find(product => product.id === id_produto)
    };
    return res.status(200).send(response);
});

// Inserindo um produto
router.post('/', function (req, res){
    const response = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        status: req.body.status
    };
    result.push(response);
    return res.status(201).send(response);
});

// Atualizando um produto específico pelo id
router.put('/:id', function (req, res){
    let id_produto = Number(req.params.id);
    for(let i = 0; i < result.length; i++){
        if(result[i].id === id_produto){
            if(req.body.name != null){
                result[i].name = req.body.name;
            }else if(req.body.description != null){
                result[i].description = req.body.description;
            }else if(req.body.price != null){
                result[i].price = req.body.price;
            }else if(req.body.status != null){
                result[i].status = req.body.status;
            }else{
                result[i].name = result[i].name;
                result[i].description = result[i].description;
                result[i].price = result[i].price;
                result[i].status = result[i].status;
            };
        };
    };
});

// Deletando um produto específico pelo id
router.delete('/:id', function (req, res){
    let id_produto = Number(req.params.id);
});

module.exports = router;