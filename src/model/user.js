const mongoose = require("../db/mongoose");

const Schema= new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],
    },
    email:{
        type: String,
        required: [true, "Please Enter Your College Email"],
        unique: true,
        match : [/^([a-zA-Z]){2,15}[2][0123](([xX]{3})|[0-9]{2,3})([0-9]){3}(-d)?@akgec.ac.in$/,"Please fill a valid email address"]
    },
    phone:{
        type:Number,
        unique:true,
        required:[true,"please enter your contact number"],
        min:[5000000000,"wrong contact number"],
        max:[9999999999,"wrong contact number"],
        match:[/^[5-9]\d{9}$/]       
    },
    student: {
        type: String,
        unique:true,
        match:[/^[2][01234](([xX]{3})|[0-9]{2,3})([0-9]){3}(-d)?$/],
        required: [true, "Please Enter Your Student Number"],
        maxLength: [9, "give your correct stdNo."],
        minLength:[7,"give your correct stdNo."]
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:[true,"Please enter the gender"]
    },
    branch:{
        type:String,
        enum:["CS","CSE","IT","CSE(DS)","AIML","CSE(AIML)","CS(Hindi)","CSIT","ECE","EN","ME","CIVIL"],
        required:[true,"please enter the branch"]
    },
    residence:{
        type:String,
        enum:["Day Scholar","Hosteler"],
        required:[true,"please enter your residence"],
    },
    year:{
        type:String,
        enum:["1","2","3"],
        required:true
    },
    uid:{
        type:String,
        required:true
    }
})

const user = mongoose.model("User",Schema);

module.exports = user;