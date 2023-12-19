const express = require("express")
const router= express.Router();
const bodyParser = require('body-parser')
const FoodDetails= require("../models/FoodDetails")

var jsonParser = bodyParser.json()
router.get("/getdetails", jsonParser ,async (req,res)=>{
    try {
        const response= await FoodDetails.find({}) 
        return res.json({response});
    } catch (error) {
        console.log({error})
        return res.json({message:error});  
    }

})



module.exports=router