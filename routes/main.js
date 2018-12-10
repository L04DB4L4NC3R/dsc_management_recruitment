const router = require("express").Router();
const {
    users,
    managers
} = require("../schema/schema");


router.post("/check",(req,res,next)=>{
    users.findOne({registrationNumber:req.body.registrationNumber})
    .then((u)=>{
        if(!u)
            return res.json({message:"User not found"})
        managers.findOne({registrationNumber:u.registrationNumber})
        .then((ud)=>{
            if(ud)
                return res.json({message:"You have already attempted the test"})
            req.session.user = req.body.registrationNumber;
            return res.send("Done");
        }).catch(next)
    }).catch(next);
})



router.post("/answer", (req,res,next)=>{
    console.log(req.body)
    if(!req.session.user)
        return res.redirect("/");
    if(req.session.user !== req.body.registrationNumber)
        return res.redirect("/");
    managers.create(req.body)
    .then(newm=>console.log(newm))
    .catch(next);
});

module.exports = router;