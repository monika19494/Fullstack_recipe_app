const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/recipe_app", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}, () => {
    console.log("database connected")
})
const userSchema = new mongoose.Schema({
    email: String,
    password:String
});

const User = new mongoose.model("User", userSchema);

app.post("/",(req,res)=>{
    const { email, password } = req.body
    User.findOne({email:email}, (err, user) => {
        if(user){
          if(password === user.password){
            res.send({message:"Login successfull", user:user})
          }
          else{
            res.send({message:"password didn't match"})
          }
         
        }
        else{
            res.send("User not registered")
        }
    })
})
app.post("/register",(req,res)=>{
const { email, password } = req.body
User.findOne({email:email}, (err, user) => {
   if(user){
    res.send({message: "User already exist"})
   }
   else{

const user = new User({
    email,
    password
})
user.save( err => {
    if(err){
        res,send(err)
    }
    else{
        res.send({message: "successfully registered"})
    }
})
   }
})
})
app.listen(9000,() =>{
    console.log("server running");
})