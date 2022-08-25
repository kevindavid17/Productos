//se importa un modulo 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Es necesario insertar un título']
    },
    price: {
        type: Number,
        required: [true, "Es necesario insertar un precio"],
    },
    description: {
        type: String,
        required: [true, "Es necesario insertar una descripción"],
    }
});

const Product = mongoose.model('Product', UserSchema);

//exportamos el modelo
module.exports = Product;