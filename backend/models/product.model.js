import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true,
        default: 0
    },
    minStock:{
        type: Number,
        required: true,
        default: 1
    },
    image:{
        type: String,
        required: true
    },
},{
    timestamps: true
}) 

const Product = mongoose.model("Product", productSchema);

export default Product;