const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtos-controller');

router.get('/api', produtosController.getApi)
router.get('/api/produtos', produtosController.getTodosProdutos);
router.get('/api/produtos/:id', produtosController.getProdutoId);
router.post('/api/produtos', produtosController.postProduto);
router.put('/api/produtos/:id', produtosController.putProduto);
router.delete('/api/produtos/:id', produtosController.deleteProduto);

module.exports = router;