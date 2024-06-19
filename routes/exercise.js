const express=require('express');

const router=express.Router();

const exerciseController=require('../controller/exercises_controller');

router.post('/',exerciseController.addExercise);


module.exports=router; 
