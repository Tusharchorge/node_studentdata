const getallStudentByID=async(req,res)=>{
const db=require('../config/db');

try{

    const studentId=req.params.st_id
    if(!studentId){
        res.status(404).send({
            success:false,
            message:'Invalid Id or Student not found'
        })
    }
    const data=await db.query(`SELECT * FROM student WHERE st_id=?`,[studentId]);
    if(!data){
        res.status(404).send({
            success:false,
            message:'No record found'
        })
    }
    else{
        res.status(200).send({
            success:true,
            message:'We got student',
            data:data[0]
        })
    }

}
catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Server error'
    })
}



}


module.exports={getallStudentByID};