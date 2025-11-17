import mongoose from "mongoose" 

const productSchema = new mongoose.Schema( {
    productId : {
        type: String,
        required: true,
        unique: true
        },

        name:{
            type:String,
            required: true
        },

        altName: {
            type: [String], // product ekakata kiyana anith names string array ekak wage save wenna
            default: [], // product ekakata kiyana thawath name nttn null array
            required: true
        },

        description: {
            type: String,
            required: true
        },

        images : {
            type:[String], // imgf links dnne
            default: [],
            required: true
        },

        price: {
            type: Number,
            required: true 
        },

        labelPrice: {
            type: Number,
            required: true

        },

        category: {
            type: String,
            required: true
        }
})

const Product = mongoose.model("Product",productSchema);
export default Product;