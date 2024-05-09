const express=require("express");

const MessageService = require("../services/MessageService");
const MessageRouter = express.Router();



MessageRouter.get('/message/:receiver',async function (req, res) {
    var {receiver}=req.params
    res.json(await MessageService.sendMessage(receiver))
});

MessageRouter.post('/message/:sender/:receiver/:data',async function (req, res) {
    var {sender,receiver,data}=req.params
    res.json(await MessageService.addMessage(sender,receiver,data))
});

module.exports=MessageRouter
