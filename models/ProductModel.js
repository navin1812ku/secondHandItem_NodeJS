const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
     uname:{type:String,required:true},
     phoneNumber:{type:String,required:true},
     model:{type:String,required:true},
     brand:{type:String,required:true},
     category:{type:String,required:true},
     ownYear:{type:String,required:true},
     kilometer:{type:String,required:false},
     place:{type:String,required:true},
     cost:{type:String,required:true}
});
const ProductModel=mongoose.model("Products",UserSchema);
module.exports=ProductModel;

