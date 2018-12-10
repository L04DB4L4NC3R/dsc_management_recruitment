const mongoose = require("mongoose");

module.exports.users = mongoose.model("user", new mongoose.Schema({
    firstName : String,
    registrationNumber  : String,
    phoneNumber       : String,
    emailAddress  : String,
    technical : {
        type: Boolean,
        default: false
    },
    design : {
        type: Boolean,
        default: false
    },
    management : {
        type: Boolean,
        default: false
    },
    sub_design:{
        uiux : {
            type: Boolean,
            default: false
        },
        graphic : {
            type: Boolean,
            default: false
        },
        video : {
            type: Boolean,
            default: false
        }
    },
    sub_management:{
        writer : {
            type: Boolean,
            default: false
        },
        manager : {
            type: Boolean,
            default: false
        }
    },
    sub_technical:{
        machinelearning : {
            type: Boolean,
            default: false
        },
        frontend : {
            type: Boolean,
            default: false
        },
        backend : {
            type: Boolean,
            default: false
        },
        python : {
            type: Boolean,
            default: false
        },
        android: {
            type: Boolean,
            default: false
        },
        general : {
            type: Boolean,
            default: false
        }
    },
    answers:{
        answerone : String,
        answertwo : String,
        answerthree : String,
        answerfour : String,
        answerfive : String
    }
}))



module.exports.managers = mongoose.model("manager",new mongoose.Schema({
    registrationNumber:String,
    answerOne : String,
    answerTwo : String,
    answerThree : String,
    answerFour : String,
    answerFive : String,
    answerSix : String,
    answerSeven : String,
    answerNine : String,
    answerTen : String,
    answerTen : String
}))