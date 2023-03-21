const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://p-pizza:pkunj@143@cluster0.ntf39ik.mongodb.net/p-pizza?retryWrites=true&w=majority'
const mongoDB = () =>{
 mongoose.connect(mongoURI,{useNEWURLparser:true},(err,result) =>
{
    if(err) console.log("---",err)
    else{
    console.log("connected")
    }
})
}
module.exports = mongoDB;
