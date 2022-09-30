const express = require('express');
const controllerProducts = require('../controllers/controllers-products');
const router = express.Router();

router.get('/', controllerProducts.listar);
router.get('/:id', controllerProducts.buscarPorId);
router.post('/', controllerProducts.inserir);
router.put('/:id', controllerProducts.atualizar);
router.delete('/', controllerProducts.deletar);

module.exports = router;