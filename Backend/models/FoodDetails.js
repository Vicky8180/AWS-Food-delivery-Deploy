const mongoose = require("mongoose")

const FoodDetails = new mongoose.Schema({

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

},
foodquantity:{
        type: Number,
        required: true
    }
    ,
    fooddiscription:{
       type: String,
        required: true
    }




})

const FoodDetailsModel = new mongoose.model('Food_Items2', FoodDetails)

module.exports = FoodDetailsModel