const {transport,option}=require('./mail.js')

transport.sendMail(option,(err,info)=>{
    if(err) throw err;
    console.log(info.response);
})
 
