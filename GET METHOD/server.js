const http=require('http');
const fs=require('fs');

//one way
// const { log } = require('console');
// http.createServer((req,res)=>{
//     if(req.method==='POST'){
//         //post req can do with req payload and header
//         req.on('data',chunk=>{
//         console.log(chunk.toString('utf8'));
        
         

//         })
        // req.on('end',err=>{
        //     console.log(body);
        //     if(err) throw err;
        //      res.end('success')
        // })
//         res.end('ok')

//     }
//     else{
//         fs.createReadStream('reg.html','utf-8').pipe(res)
//     }
// }).listen(5000,err=>{
//     if (err) throw err;
//     console.log('port no 5000');
// })
//another way
const { log } = require('console');
const {parse}=require('querystring')
http.createServer((req,res)=>{
    if(req.method==='POST'){
       if(req.headers['content-type']==='application/x-www-form-urlencoded'){
        
        let body1=''
        
        req.on('data',chunk=>{
            body1=chunk.toString()
         
           

        })
        req.on('end',_=>{
            // console.log(body);
            let user=parse(body1)
            console.log(user);
            console.log(user.name);
            console.log(user.password);
            res.end('ok')
        })
      
       }

    }
    else{
        fs.createReadStream('reg.html','utf-8').pipe(res)
    }
}).listen(5000,err=>{
    if (err) throw err;
    console.log('port no 5000');
})