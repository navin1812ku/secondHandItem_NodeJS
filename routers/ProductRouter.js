const express=require("express");

const ProductService = require("../services/ProductService");
const ProductRouter = express.Router();



ProductRouter.get('/product',async function (req, res) {
    res.json(await ProductService.findAll())
});

ProductRouter.get("/product/:productId", async (req, res) => {
    var { productId } = req.params;
    res.json(await ProductService.getByProducts(productId));
});

ProductRouter.post("/product/add/:uname",async(req,res)=>{
    var {uname}=req.params
    var product=req.body
    await ProductService.addProduct(uname,product)
    res.json(await ProductService.findAll())
});

ProductRouter.delete("/product/:id",async(req,res)=>{
    var {id}=req.params
    res.json(await ProductService.removeProduct(id))
});

module.exports= ProductRouter;