const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT||3000;
require("dotenv").config();



app.get('/api', (req,res) =>{
res.send("This is unprotected route");
});

app.post('/api/login', (req,res) => {
const user = { name : "Admin" };
const token = jwt.sign({ user},process.env.JWT_KEY);
res.send({
    token: token
})
});

app.get('/api/protected', ensureToken,(req,res) => {
    jwt.verify(req.token,process.env.JWT_KEY, function(err,data){
        if(err){
            res.sendStatus(403);
        
    }else{
        res.send({
            text: 'This is protected',
            data : data, 
        });
    }
})
});


function ensureToken (req,res,next) {
    const bearerHeader = req.headers.authorization;
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ")[1];
        req.token = bearer;
        // console.log(bearer)
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(PORT, function(){
    console.log(`Server started at http://localhost:${PORT}`);
});