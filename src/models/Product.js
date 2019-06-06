const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    //Modelagem do produto e sua propriedades
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);