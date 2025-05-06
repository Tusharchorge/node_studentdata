const getallStudents=async(req,res)=>{
const db=require('../config/db');

    try{

        const data= await db.query('SELECT * FROM student');

    if(!data){
        res.status(404).send({
            success:false,
            message:'No record found',
        })
         
    }
    else{
        res.status(200).send({
            success:true,
            message:'We get all students',
            data:data[0]
        })
    }

    }
    catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Internal Server error',
        error
    })
    }

    

 }

 module.exports={getallStudents};