const mongoose=require('mongoose')
const UserModel=require('../models/UserModel')

mongoose.connect("mongodb://127.0.0.1:27017/products");

const UserService={
    users:async()=>{
        var usersData=await UserModel.find()
        return usersData
    },
    register:async(userData)=>{
        var user=await UserModel.findOne({uname:userData.uname})
        if(user==null){
            var pDoc=await UserModel.create(userData)
            return pDoc
        }
        else{
            return "Already you had an account Kindly go to login"
        }
    },
    login: async (u, p) => {
        var user = await UserModel.findOne({ uname: u ,password:p});
        return user;
    },
    changepassword:async(userData)=>{
        var user=await UserModel.findOneAndUpdate({uname:userData.uname},{password:userData.newPassword})
        if(user!=null)
        {
            return user
        }
        else
        {
            return null
        }
    }
}

module.exports=UserService

