const http=require('http')
const fs=require('fs')
const {parse}=require('querystring')
// const nodemailer=require('./mail.js')
const transport = require('./mail.js')
http.createServer((req,res)=>{
    if(req.method==='POST'){
       if(req.headers['content-type']==='application/x-www-form-urlencoded'){ 
        let body=''  
        req.on('data',chunk=>{
            body+=chunk
            
        })
        req.on('end',_=>{
        
            let contactDetails=parse(body)
            let option={
                from:contactDetails.email,
                to:'dexterak002@gmail.com',
                sub:'node mailer test',
                html:`<h1>contact details</h1>
                <h1>${contactDetails.Firstname} ${contactDetails.Lastname}</h2>
                <h2>${contactDetails.email}</h2>
                <p>${contactDetails.phone}</p>
                <p>${contactDetails.Adress}</p>
                
                `
            }
            transport.sendMail(option,(err)=>{
                if(err) throw err;
                console.log('mail send successfully');
             })
            
            console.log(contactDetails);
            res.end('Thank you....')
        })
       }
       else{
        res.end('thank you....')
       }

    }
  else{
    if(req.url==='' || req.url==='/'){
        fs.createReadStream('client/reg.html','utf-8').pipe(res)
    }
    else if(req.url==='/style.css'){
        res.writeHead(200,'ok','text/css')
        fs.createReadStream('client/style.css','utf-8').pipe(res)
    }
    else{
        res.end('<h1 style="color:red">page not found</h1>')
    }
  }
}).listen(5000,err=>{
    if (err) throw err;
    console.log('port no 5000');
})