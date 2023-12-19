const mongoose = require("mongoose")

const OrderDetails = new mongoose.Schema({

    foodname:{
      type: String,
        required: true

    },
    foodprice:{
        type: Number,
        required: true

    },
    foodcategory: {
    type: String,
    required: true

}, 
foodrating:{
     type:Number,
    required: true

}, 
foodimg: {
    type:String,
    required: true

}
    ,
    fooddiscription:{
       type: String,
        required: true
    },
username:
{
    type: String,
     required: true
 },
 userphone:{
    type: Number,
     required: true
 },
 useremail:{
    type: String,
     required: true
 }
, totalprice:{
    type: Number,
     required: true
 }, quantity:{
    type: Number,
     required: true
 },


})

const OrderDetailsModel = new mongoose.model('Food&UserDetails', OrderDetails)

module.exports = OrderDetailsModel