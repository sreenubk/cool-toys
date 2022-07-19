import  express  from 'express';
import ayncHandler from 'express-async-handler'
const router = express.Router();
import Product from '../models/productModel.js'

router.get("/", ayncHandler(async (req,res) =>{

    const products = await Product.find({})
    res.json(products)

}))

router.get("/:id", ayncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)    
    }else{
        throw new Error("Product Not Found in the Data Base")
    }
    

}))
export default router