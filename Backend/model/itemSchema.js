import Mongoose from "mongoose";


const itemSchema = Mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description:String,
    discount:String,
    tagline: String

})

const productSchema = Mongoose.model('ecommerce-products', itemSchema)

export default productSchema