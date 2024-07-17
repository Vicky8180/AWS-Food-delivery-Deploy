const express = require("express")
const app=express();
// const port = 5000
const dp=require("./db")
const path  = require('path');
const cors = require('cors')





// const _dirname=path.dirname("")
// const buildpath = path.join(_dirname,"../food-delivery/build")
// app.use(express.static(buildpath))

app.use(cors());

const FoodDetailsAPI=require("./routers/Food_Details")
const OrderDetails= require("./routers/OrderDeails")

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://food-delivery1-5tut.vercel.app");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();
  })


app.use('/api', FoodDetailsAPI);
app.use('/api', OrderDetails);





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})