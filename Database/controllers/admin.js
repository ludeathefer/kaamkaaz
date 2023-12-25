const ServiceProvider = require("../models/ServiceProvider");
const Request = require("../models/Request");
const ServiceUser = require("../models/ServiceUser");

const getUsers = async(req, res, next)=>{
    try{
        const a = await ServiceProvider.find()
        const b = await ServiceUser.find()
        const users = [...a, ...b]
        res.json(users);
    }catch(error){
        next(error)
    }
}
const getUser = async(req, res, next)=>{
    try{
        const {userID} = req.params
        const user = await ServiceProvider.findById(userID)|| await ServiceUser.findById(userID)
        res.json(user)
    }
    catch(error){
        next(error)
    }
}
const modifyUser = async(req, res, next)=>{
    try {
        const {userID}= req.params
        const user = await ServiceProvider.findByIdAndUpdate(userID) || await ServiceUser.findByIdAndUpdate(userID)
        res.json(user)
    } catch (error) {
            next(error)
    }
}


module.exports= {modifyUser, getUser, getUsers}