const createStudent=async(req,res)=>{
const db=require('../config/db');

try{
    const{st_name,st_roll,st_marks,st_address}=req.body

    if(!st_name||!st_roll||!st_marks||!st_address){
        res.status(404).send({
            success:false,
            message:'Failed to create student'
        })
    }
    
    const data=await db.query(`INSERT INTO student(st_name,st_roll,st_marks,st_address) VALUES(?,?,?,?)`,[st_name,st_roll,st_marks,st_address]);
    if(!data){
        res.status(404).send({
            success:false,
            message:'Invalid Credetials'
        })
    }
    else{
        res.status(200).send({
            success:true,
            message:'New Student created'
            
        })
    }

}
catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Internal Server Error'
    })
}

}

module.exports={createStudent};
