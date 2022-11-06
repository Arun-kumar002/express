const {Schema,model}=require('mongoose');

let Authschema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
},{  timestamps:true },);

module.exports=model('users',Authschema);