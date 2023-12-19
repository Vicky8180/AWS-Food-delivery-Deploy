const express= require("express")
const router=express.Router();
const bodyParser = require('body-parser')

const OrderDetails = require("../models/OrderDetails")

var jsonParser = bodyParser.json()
router.post("/orderpost",jsonParser,async (req,res)=>{

try {
    const dataTaking= await OrderDetails.create({

  foodname:req.body.foodname,
  foodprice:req.body.foodprice,
  foodcategory:req.body.foodcategory,
  foodrating:req.body.foodrating,
  foodimg:req.body.foodimg,
  fooddiscription:req.body.fooddiscription,
  username:req.body.username,
  userphone:req.body.userphone,
  useremail:req.body.useremail,
  quantity:req.body.quantity,
  totalprice:req.body.tprice


    }).then(orderpost=>(res.json(orderpost)))
} catch (error) {
    console.log(error)
    res.json({success:false})
}

})

module.exports=router;