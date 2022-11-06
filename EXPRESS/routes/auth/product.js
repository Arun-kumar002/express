const express=require('express')
const productSchema=require('../../Model/product')

const route=express.Router()
//login page
route.get('/createproducts',(req,res)=>{
    res.render('product/createproduct')
    
    
})
route.post('/createproducts', async (req,res)=>{
    console.log(req.body);
  await productSchema.create(req.body);

  res.end('ok')
    
    
})

module.exports=route;
