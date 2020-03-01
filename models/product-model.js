const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        pictureUrl: { type: String, required: true },
        textUrl: { type: String, required: true },
        shopUrl: { type: String, required: true },
        type: { type: String, required: true },
        detailsUrl: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)

