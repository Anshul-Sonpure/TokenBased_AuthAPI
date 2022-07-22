var express = require('express');
var jwt = require('jsonwebtoken');
const app = express();
require("dotenv").config();
const fs = require("fs");
const bodyParser = require('body-parser');
const importdata = require("./users.json")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api', (req,res) =>{
res.json({
    text:'Demo API for Signup and Login flow with AUTH Token'
});
});

// app.post('/api/login', (req,res) => {
// const user = { name : "Apoorv" };
// const token = jwt.sign({ user},process.env.JWT_KEY);
// res.json({
//     token: token
// })
// });

app.post('/api/login', ensureToken,(req,res) => {
    jwt.verify(req.token,process.env.JWT_KEY, function(err,data){
        if(err){
            res.status(400);
            // res.send(400).json({message:"UnAuthorize Access"});
        
    }else{
        res.json({
            text: 'Welcome',
            data : data,
            
        });
    }
})
});

app.post('/api/signup', (req,res) => {
    const udata={
        password : req.body.password,
        user : req.body.user
    }
    const token = jwt.sign({udata},process.env.JWT_KEY);
    res.json({
        token: token
    })
    });

app.post('/api/updatepassword',(req,res)=> {
    
        const oldpwd = req.body.oldpassword;
        const newpwd = req.body.newpassword;
        const usr = req.body.user;
    
    const token = jwt.sign({newpwd,usr},process.env.JWT_KEY);
    res.json({
        token: token,
        newpassword:newpwd,
        user:usr

        
    })
})

//Get all User Route
app.get('/getusers',(req,res) =>{
           res.send(importdata);
           res.status(200)
   
   })

function ensureToken (req,res,next) {
    const bearerHeader = req.headers.authorization;
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        req.token = bearer[1];
        console.log(bearer)
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(3000, function(){
    console.log('App listening on port 3000!');
});