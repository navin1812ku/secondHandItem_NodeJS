const mongoose=require('mongoose')
const ProductModel=require('../models/ProductModel')
const UserModel = require('../models/UserModel')

mongoose.connect("mongodb://127.0.0.1:27017/products")

const ProductService={
    addProduct:async(uname,product)=>{
        var user=await UserModel.findOne({uname:uname})
        var pDoc=await ProductModel.create({
            uname:uname,
            phoneNumber:user.phoneNumber,
            model:product.model,
            brand:product.brand,
            category:product.category,
            ownYear:product.ownYear,
            kilometer:product.kilometer,
            place:product.kilometer,
            cost:product.cost
        })
        return pDoc
    },
    removeProduct:async(productId)=>{
        var data=await ProductModel.findByIdAndDelete(productId)
        return data
    },
    getByCategory:async(categoryValue)=>{
        var products=await ProductModel.find({category:categoryValue})
        return products
    },
    findAll:async()=>{
        var products=await ProductModel.find()
        return products
    },
    getByProducts:async(productId)=>{
        console.log(await ProductModel.find({model:productId}))
        return await ProductModel.find({ 
            $or: [
                { model: productId }, 
                { brand: productId }, 
                { category: productId },
                { ownYear: productId },
                { place: productId },
                { cost: productId }
            ] 
        })
    }
}
module.exports=ProductService;