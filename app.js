require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const request = require("request");
const session = require("express-session")
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(session({
    secret: process.env.CAPTSECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(express.static("frontend"))

mongoose.connect(process.env.DBURL, {useNewUrlParser: true});
mongoose.connection.once("open",()=>console.log("connected"))
.on("error",()=>console.log("error connecting to db"));


// app.get("/admin",(req,res,next)=>{
//     res.sendFile(__dirname + "/frontend/admin.html");
// });

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + "/frontend/index.html");
});




app.use((err,req,res,next)=>{
    console.log(err);
    res.send("Some error occurred").status(500);
});

app.listen(process.env.PORT || 3000, ()=>console.log("Listening"));