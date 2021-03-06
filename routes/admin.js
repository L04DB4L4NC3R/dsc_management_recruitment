const router = require("express").Router()
const {
    users,
    managers
} = require("../schema/schema");
const jwt = require("jsonwebtoken")

router.post("/login", (req,res,next)=>{
console.log(req.body)
    if(req.body.passphrase === process.env.PASS) {
        jwt.sign({level:"admin"}, process.env.SECRET, (err, token)=>{
            if(err) 
                next(err)
            
            return res.json({token})
        });
    } else {
        return res.json({message:"Invalid input"})
    }
});

router.post("/show", (req,res,next)=>{
    jwt.verify(req.get("Authorization"), process.env.SECRET, (err, data)=>{
        if(err || data.level != "admin")
            return res.json({message:"Invalid token"});
        query={}
        if(req.body.year){
            let reg=new RegExp("1"+(9-req.body.year)+"[a-zA-Z][a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9]");
            query["registrationNumber"]={$regex:reg}
        }
        managers.find(query)
        .then((d)=>{
            console.log(d.length);
            res.json(d);
        })
        .catch(next);
    })
    
});


router.post("/show/all", (req,res,next)=>{
    jwt.verify(req.get("Authorization"), process.env.SECRET, (err, data)=>{
        if(err || data.level != "admin")
            return res.json({message:"Invalid token"});
        users.find({})
        .then(d=>res.json(d))
        .catch(next);
    })
    
});



module.exports = router;