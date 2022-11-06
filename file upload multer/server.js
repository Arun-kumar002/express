const express=require('express')
const {connect} =require('mongoose')
const {engine} =require('express-handlebars')
const app=express();
const multer=require('multer')
const photoSchema=require('./photos');


//
connect('mongodb://localhost:27017/photos',(err)=>{
    if(err) throw err;
    console.log('db connected');
})
//
app.use(express.urlencoded({extended:true}))
app.engine('handlebars',engine());
app.set('view engine','handlebars')
app.use(express.static(__dirname+'/public'))
//multer part
let storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'public/photos')
    },
    filename:function(req,file,callback){
        callback(null,Date.now()+file.originalname)
    }
})
let upload=multer({storage})

//request

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/photos',async (req,res)=>{
    let photos=await photoSchema.find({}).lean()
    res.render('photos',{photos})
})

app.post('/upload', upload.single('photos'), async (req,res)=>{
    console.log('photos uploaded',req.file);
    let data={
        photos:req.file,
    }
    await photoSchema.create(data)
    res.end('ok data stored in db')

});






//port
app.listen(5000,(err)=>{
    if(err) throw err;
    console.log('server listen port no 5000');
})