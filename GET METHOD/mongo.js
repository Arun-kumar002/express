let url='mongodb://localhost:27017/testyantra';

import {MongoClient} from 'mongodb'

const {connect}=MongoClient;

let mongodb= async()=>{
    try{
       let db= await connect(url)
       console.log('db connected');
       let dbname=db.db('testyantra')

       //create collection
       let user={
        name:'arun',
        company:'tyss',
        designation:'js deveioper'
       }
       await (await dbname.Collection('users')).insertOne(user)
       console.log('data inserted');
    }
    catch(error){
      console.error(error)
    }
};
mongodb()