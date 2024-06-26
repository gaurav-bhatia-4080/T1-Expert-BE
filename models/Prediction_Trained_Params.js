const mongoose = require('mongoose');
const pred_trained_params_schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    average_breakfast:{
        type:Number,
        default:40.0
    },
    average_lunch:{
        type:Number,
        default:40.0
    },
    average_snack:{
        type:Number,
        default:40.0
    },
    average_dinner:{
        type:Number,
        default:40.0
    },
    breakfast_icr:{
        type:Number
    },
    breakfast_isf:{
        type:Number
    },
    lunch_icr:{
        type:Number
    },
    lunch_isf:{
        type:Number
    },
    snack_icr:{
        type:Number
    },
    snack_isf:{
        type:Number
    },
    dinner_icr:{
        type:Number
    },
    dinner_isf:{
        type:Number
    },
    icr:{
        type:Number
    },
    isf:{
        type:Number
    },
    insulin_dose:{
        type:Number,
        default:0.0        
    },
    prev_insulin_time:{
        type:String,
        default:"0"
    },
    division_by:{
        type:Number,
        default:4.0
    },      
});

const Pred_Trained_Params = mongoose.model("prediction_trained_parameters", pred_trained_params_schema);
module.exports=Pred_Trained_Params