const express =require('express');
const app = express();
const path = require('path');
const port = 5005;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
})

app.get('/schedule',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/schedule.html'));
})

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`server is listening to ${port}`);
    }
})