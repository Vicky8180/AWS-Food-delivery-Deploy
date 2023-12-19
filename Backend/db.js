const mongoose=require('mongoose')


var mongoURL="mongodb+srv://Anoop:Anoop@cluster0.swf6hyc.mongodb.net/test"

   mongoose.connect(mongoURL,{useNewUrlParser:true ,useUnifiedTopology: true,bufferCommands: false})
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log("  ")
})
connection.on('connected' , ()=>{
   console.log("connected aur chal gya")
})
module.exports =mongoose;

