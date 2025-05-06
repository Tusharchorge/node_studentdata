const express=require('express');
const router=express.Router();
const { getallStudents } = require("../controllers/getallStudents");
const { getallStudentByID } = require('../controllers/getallStudentByID');
const { createStudent } = require('../controllers/createStudent');
const { updateStudent } = require('../controllers/updateStudent');
const { deleteStudent } = require('../controllers/deleteStudent');


router.get('/all',getallStudents);

router.get('/get/:st_id',getallStudentByID)

router.post('/add',createStudent);

router.put('/update/:st_id',updateStudent)

router.delete('/delete/:st_id',deleteStudent)


module.exports=router;