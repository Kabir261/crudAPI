const { json } = require("express");
const User = require("../models/user")


const test = (req, res) => {
    res.send("Test is working")
}

const user = async(req, res) => {
    try{
    const {name, email, gender , phone , image} = req.body;

    const exist = await User.findOne({email});

    if(exist){
        return res.json({
            error: "Email already exists!!"
        })
    }
    const user = await User.create({
        name, 
        email,
        gender,
        phone,
        image
    });
    return res.json(user)
}catch(error){
    console.log(error)
}
}

const alluser = async (req, res) => {
  const allusers = await User.find({});

  res.json({allusers})
}

const userbyid = async (req, res) => {

   try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({user});
    
   } catch (error) {
    res.status(500, 404),json({error: error})
   }
}

const userupdate = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user) {
            return res.status(404).json({message: `No user with ID ${id} exist!!`});
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500, 404),json({error: error})
    }
}

const userdelete = async (req, res) => {

    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id, req.body);
        if(!user) {
            return res.status(404).json({message: `No user with ID ${id} exist!!`});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500, 404),json({error: error})
    }
}

module.exports = {
    test,
    user,
    alluser,
    userbyid,
    userupdate,
    userdelete
}