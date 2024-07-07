import Product from '../model/product-schema.js';
import mongoose from 'mongoose';



export const getProducts = async (req, res) => {

    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById({'id': id});
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// export const getProductById = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const product = await Product.findById({'id': id});
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }