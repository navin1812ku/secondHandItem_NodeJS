const mongoose=require('mongoose')
const MessageModel=require('../models/MessageModel')
mongoose.connect("mongodb://127.0.0.1:27017/products");

const MessageService={
    addMessage:async(sender,receiver,data)=>{
        var newMessage=await MessageModel.create({
            sender:sender,
            receiver:receiver,
            data:data
        });
        return newMessage
    },
    sendMessage: async(receiver) => {
        var user = await MessageModel.find({receiver:receiver})
        return user;
    }
}




module.exports=MessageService

