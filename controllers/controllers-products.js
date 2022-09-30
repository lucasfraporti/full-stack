const produtoPersist = require('../persist/persists-product')

exports.listar = (req, res) => {
    produtoPersist.listar((err, listaProdutos) => {
        if(err){
            return res.status(500).json({error: err});
        }else{
            return res.json(listaProdutos);
        };
    });
};

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    produtoPersist.buscarPorId(id, (err, produto) => {
        if(err){
            return res.status(500).json({error: err});
        }else{
            if(produto){
                return res.json(produto);
            }else{
                return res.status(404).json({error: "Produto não encontrado"});
            };
        };
    });
};

exports.inserir = (req, res) => {
    const produto = req.body;

    produtoPersist.inserir(produto, (err, produtoInserido) => {
        if(err){
            return res.status(500).json({error: err});
        }else{
            return res.json(produtoInserido);
        };
    });
};

exports.atualizar = (req, res) => {
    const produto = req.body;
    const id = req.params.id;

    produtoPersist.atualizar(id, produto, (err, produtoAtualizado) => {
        if(err){
            return res.status(500).json({error: err});
        }else{
            if(produtoAtualizado){
                return res.json(produtoAtualizado);
            }else{
                return res.status(404).json({error: "Produto não encontrado"});
            };
        };
    });
};

exports.deletar = (req, res) => {
    const id = req.params.id;

    produtoPersist.deletar(id, (err, produtoDeletado) => {
        if(err){
            return res.status(500).json({error: err});
        }else{
            if(produtoDeletado){
                return res.json(produtoDeletado);
            }else{
                return res.status(404).json({error: "Produto não encontrado"});
            };
        };
    });
};