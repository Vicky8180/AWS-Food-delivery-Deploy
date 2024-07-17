const mongoose=require('mongoose')


// var mongoURL="mongodb+srv://Anoop:Anoop@cluster0.swf6hyc.mongodb.net/test"
var mongoURL="mongodb+srv://Anoop:Anoop@cluster0.swf6hyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

   mongoose.connect(mongoURL,{useNewUrlParser:true ,useUnifiedTopology: true,bufferCommands: false})
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log("  ")
})
connection.on('connected' , ()=>{
   console.log("connected aur chal gya")
})
module.exports =mongoose;

