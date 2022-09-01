/* ================================================================= */

let idGerador = 3;
function gerarId(){
    return idGerador++;
};

let listaProdutos = [
    { id: 1, name: 'PS4', price: 2500 },
    { id: 2, name: 'PS5', price: 5000 }
];

/* ================================================================= */

exports.getApi = (req, res) => {
    res.send({"mensagem": "Acessando o back"});
};

exports.getTodosProdutos = (req, res) => {
    res.json(listaProdutos);
};

exports.getProdutoId = (req, res) => {
    const id = parseInt(req.params.id);
    let response = listaProdutos.find(produto => produto.id === id);
    return res.json(response);

    /*
    for (const produto of listaProdutos){
        if(produto.id === id){
            return res.json(produto);
        };
    };
    res.status(404).json({"mensagem": "Produto não encontrado"});
    */
};

exports.postProduto = (req, res) => {
    let produto = req.body;
    produto.id = gerarId();
    listaProdutos.push(produto);
    res.status(201).jsonp(produto);
};

exports.putProduto = (req, res) => {
    const id = parseInt(req.params.id);
    let attProduto = req.body;

    // https://www.w3schools.com/js/js_array_iteration.asp (JavaScript Array find())
    /*
    listaProdutos.find(
        (produto) => {
            return (produto.id === id);
        }
    );
    */

    let produto = listaProdutos.find(produto => produto.id === id);
    if(produto){
        // Se o if não tem chaves, só é executada uma linha
        if(attProduto.name)
            produto.name = attProduto.name;
        if(attProduto.price)
            produto.price = attProduto.price;
        res.json(produto);
    }else{
        res.status(404).json({"mensagem": "Produto não encontrado"});
    };

    /*
    for (const produto of listaProdutos){
        if(produto.id === id){
            produto.name = attProduto.name;
            produto.price = attProduto.price;
        };
        res.status(201).json({"mensagem": "Produto atualizado"});
    };
    res.status(404).json({"mensagem": "Produto não encontrado"});
    */
};

exports.deleteProduto = (req, res) => {
    const id = parseInt(req.params.id);

    // https://www.w3schools.com/js/js_array_iteration.asp (JavaScript Array findIndex())
    const indexRemover = listaProdutos.findIndex(
        produto => produto.id === id
    );

    if(indexRemover >= 0){
        res.json(listaProdutos.splice(indexRemover, 1));
    }else{
        res.status(404).json({"mensagem": "Produto não encontrado"});
    };
};