const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();
require("../db/connection");

const User = require("../models/Schema");
router.use(cookieParser());
router.get("/", (req, res) => {
  res.send("hello from server");
});

router.post("/register",async(req,res)=>{
  
 try {
    const{name,email,phone}= req.body;
    if ( !email || !name) {
      return res.json(req.body);
    }
    const user = new User({name,email,phone});
    await user.save();
    res.status(201).json({ message: "user data added" });
    
    
 } catch (error) {
    res.status(501).json(error);
    console.log("error from backend")
 }

});


router.get('/allusers', async(req,res)=>{
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
})




module.exports = router;