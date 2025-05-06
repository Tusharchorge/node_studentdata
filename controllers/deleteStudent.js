const deleteStudent=(req,res)=>{
const db=require('../config/db');

try{
    const student=req.params.st_id;
    if(!student){
        res.status(404).send({
            success:false,
            message:'Incorrect credentials'
        })
    }
    const data=db.query(`DELETE FROM student WHERE st_id=?`,[student]);
    if(!data){
        res.status(404).send({
            success:false,
            message:'Invalid data'
        })
    }
    return res.status(200).send({
        success:true,
        message:'Deleted student successfully'
    })

}
catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        messge:'Internal server error',
        error
    })
}



}

module.exports={deleteStudent};