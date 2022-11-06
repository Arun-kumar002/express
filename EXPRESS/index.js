// const express=require('express')
// let app=express()
//routing
// app.get('/',(req,res)=>{
//     res.send('welcome buddy i,m express')
// })
// app.get('/login',(req,res)=>{
//     res.send('im login page')
// })
// app.get('/signup',(req,res)=>{
//     res.send('im signup page')
// })
//local host


//application level middleware
// function mern(req,res,next){
//     console.log('mern');
//     next()
// }
// function python(req,res,next){
//     console.log('python');
//     next()
// }
// function java(req,res,next){
//     console.log('javaS');
//     next()
// }

//use use method
// app.use(mern,python,java)

//without use method
// app.get('/',mern,(req,res)=>{
//     res.send('hello world im express')
// })
//its for staic pages
// app.use(express.static(__dirname+'/public'))
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('port listening 5000');
// })


//html 5 free templates
// app.use(express.static(__dirname+'/public'))
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('port listening 5000');
// })

//BUILD IN middle ware

// function setdate(req,res,next){
//     console.log(new Date().toLocaleString());
//     next()
// }
// app.use(setdate)
// app.use(express.static(__dirname+'/public'))
// app.get('/date',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
//     console.log('hi');
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('port listening 5000');
// })

//ROUTER LEVEL MIDDLE WARE


//  const authRoute=require('./routes/auth');
//  const productRoute=require('./routes/product')
// //mount here
// app.use('/auth',authRoute);
// app.use('/product',productRoute);
//  app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('port listening 5000');
// });


//dynamic pages
const { urlencoded } = require('express');
const express=require('express')
let app=express()
const {engine}=require('express-handlebars');
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/expressapp'

mongoose.connect(url,(err)=>{
    if(err) throw err;
    console.log('db connected');
})



const authRoute=require('./routes/auth/register')
app.engine('handlebars',engine())
app.set('view engine' ,'handlebars')
//css static apply
app.use(express.static(__dirname+'/public'))
//url encoded
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})
//product route
const productRoute=require('./routes/auth/product')
app.use('/product',productRoute)

app.use('/auth',authRoute)


app.listen(5000,err=>{
    if(err) throw err;
    console.log('port listening 5000');
});
