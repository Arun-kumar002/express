let  node=require('nodemailer');

let transport=node.createTransport(
    {
    service:'gmail',
    auth:{
        user:'dexterak002@gmail.com',
        pass:'arun0002'

    }
});
let option={
    from:'dexterak002@gmail.com',
    to:'arunsubramanian002@gmail.com',
    sub:'node mailer test',
    text:'hai boiyee'
}

transport.sendMail(option,(err,info)=>{
   if(err) throw err;
   console.log(info.response);
})
