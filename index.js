 const express=require('express');
 const app=express();
 require('dotenv').config();

 const PORT=process.env.PORT||3000

 app.use(express.json());
 
 app.use('/api',require('./routes/studentRoutes'));
 

  

 app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
 })