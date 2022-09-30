const { Client } = require('pg');

const connection = {
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'api_crud_produtos'
};

exports.listar = (callback) => {
    const cliente = new Client(connection);
    cliente.connect();

    const sql = 'SELECT * FROM produtos';

    cliente.query(sql, (err, res) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, res.rows);
        };
        cliente.end();
    });
};

exports.buscarPorId = (id, callback) => {
    const cliente = new Client(connection);
    cliente.connect();

    const sql = 'SELECT * FROM produtos WHERE id = $1';
    const values = [id];

    cliente.query(sql, values, (err, res) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, res.rows[0]);
        };
        cliente.end();
    });
};

exports.inserir = (produto, callback) => {
    const cliente = new Client(connection);
    cliente.connect();

    const sql = 'INSERT INTO produtos(name, price) VALUES($1, $2) RETURNING *';
    const values = [produto.name, produto.price];

    cliente.query(sql, values, (err, res) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, res.rows[0]);
        };
        cliente.end();
    });
};

exports.atualizar = (id, produto, callback) => {
    const cliente = new Client(connection);
    cliente.connect();

    const sql = 'UPDATE produtos SET name = $1, price = $2 WHERE id = $3 RETURNING *';
    const values = [produto.name, produto.price, id];

    cliente.query(sql, values, (err, res) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, res.rows[0]);
        };
        cliente.end();
    });
};

exports.deletar = (id, callback) => {
    const cliente = new Client(connection);
    cliente.connect();

    const sql = 'DELETE FROM produtos WHERE id = $1 RETURNING *';
    const values = [id];

    cliente.query(sql, values, (err, res) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, res.rows[0]);
        };
        cliente.end();
    });
};