const mongoose = require('mongoose');
const Schema = mongoose.Schema



const emailSchema = Schema({
  CloserName : {
    type : String ,
  }
  ,
  CustomerName : {
    type : String , 
  },
  CustomerEmail : {
    type : String , 
  }
  ,
  HotelName :{
    type : String , 
  }
  ,
  HotelPrice : {
    type : Number
  }
  
  
},{
  timestamps: true, // Enable timestamps
})
module.exports = mongoose.model("Email" , emailSchema)