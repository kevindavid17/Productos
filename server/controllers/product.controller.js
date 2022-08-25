//tenemos al modelo en la constante producto
const Product = require('../models/product.model');

module.exports.createProduct = (request, response) =>{
    //desestructuramos
    const {title, price, description} = request.body;
    Product.create({
        title, price, description
    })
        .then(product => response.json({insertedProduct: product, msg: 'Succesful creation'}))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProducts = (_,response) =>{
    Product.find({})
    .then(retrievedProducts => response.json(retrievedProducts))
    .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) =>{
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) =>{
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updateProduct => response.json(updateProduct))
    .catch(err => response.json(err))

}

module.exports.deleteProduct = (request, response) =>{
    Product.deleteOne({_id: request.params.id})
    .then(productDeleted => response.json(productDeleted))
    .catch(err => response.json(err))
}
