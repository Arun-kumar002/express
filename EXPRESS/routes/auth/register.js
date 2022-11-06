// const express=require('express')

// const route=express.Router()
// //login page
// route.get('/login',(req,res)=>{
//     res.send('login page')
// })
// //register page
// route.get('/register',(req,res)=>{
//     res.send('register  page')
// })


// module.exports=route;
const express=require('express')
const authSchema=require('../../Model/auth')

const route=express.Router()

//register page get method
route.get('/register',(req,res)=>{
    res.render('auth/register')
})
//create post method
route.post('/register',async (req,res)=>{
    // console.log(req.body);
   await authSchema.create(req.body)
    res.end('ok')
})

module.exports=route;