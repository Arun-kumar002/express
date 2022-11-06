let http = require("http")
let fs = require("fs")
let {parse}=require('querystring')
let {connect}=require('mongodb').MongoClient;
let url='mongodb://localhost:27017'

let server = http.createServer((req, res)=>
{
    if(req.method==='POST'){
       let _header='application/x-www-form-urlencoded'
      if(req.headers["content-type"]===_header){
        let body=''
        req.on('data',chunk=>{
            body+=chunk

        })
        console.log(body);
        req.on('end',async _=>{
         let value=parse(body).email;
         //db creation and insert values
         let dbconnection= await connect(url)
         dbconnection.db('netflix').collection('users').insertOne({email:value})
         res.end('successfully fetched and appended')
        })
       
      }
      else{
        res.end('ok')
      }

    }else{
        
    res.writeHead(200, {"content-type":"text/html"})
    let path ="./client"
    switch(req.url)
    {
        case "/":
            path += "/index.html"
            break;
        case "/css/netflix.css":
            res.writeHead(200, {"content-type":"text/css"})
             path += "/css/netflix.css"
             break;
        case "/images/bg.jpg":
            res.writeHead(200, {"content-type":"image/jpeg"})
             path += "/images/bg.jpg"
            break;
            case "/video/video.mp4":
                res.writeHead(200, {"content-type":"video/mp4"})
                 path += "/video/video.mp4"
                break;
        default:
            res.statusCode = 404
            
            path += "/pagenotFound.html"
    }
    fs.readFile(path, (err, data)=>
    {
        if(err) throw err
        res.end(data)
    })
    }
})
let port = process.env.PORT || 5000
server.listen(port, err=>
    {
        if(err) throw err
        console.log("server is running on port "+ port)
    })