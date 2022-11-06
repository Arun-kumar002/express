const {Schema,model}=require('mongoose')

const photoSchema=new Schema({
   photos:{
    type:[""]
   }
    
},{timestamps:true})

module.exports=model('photos',photoSchema)