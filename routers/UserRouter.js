const express=require("express");
const UserService = require("../services/UserService");

const UserRouter = express.Router();
 
UserRouter.get('/users',async function (req, res) {
    var users=await UserService.users()
    res.json(users)
});

UserRouter.post("/register",async(req,res)=>{
    var data=req.body
    var new_user=await UserService.register(data)
    res.json(new_user)
});

UserRouter.post("/login", async (req, res) => {
    var { uname,password } = req.body;
    var user = await UserService.login(uname,password);
    if(user!=null)
        res.json(user);
    else
    res.json("invalid");
});

UserRouter.put("/changePassword",async(req,res)=>{
    var data=req.body
    var user=await UserService.changepassword(data)
    res.json(user)
})

module.exports= UserRouter;