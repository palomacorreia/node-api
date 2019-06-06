const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //listagem
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },
    //detalhe
    async show(req, res) {

        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //Criar
    async store(req, res) {
        const product = await Product.create(req.body);


        return req.json(product);
    },
    //Atualizar
    async update(req, res) {
        //criação de novas rotas
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });



        return req.json(product);
    },
    //Delete
    async destroy(req, res) {
        const product = await Product.findOneAndRemove(req.params.id);



        return res.send();
    },

};