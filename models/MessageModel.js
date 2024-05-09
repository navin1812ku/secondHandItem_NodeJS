const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    sender:{type:String,required:true},
    receiver:{type:String,required:true},
    data:{type:String,required:true}
});//message
const MessageModel=mongoose.model("message",UserSchema);
module.exports=MessageModel;
