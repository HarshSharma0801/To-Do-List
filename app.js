const express = require('express');
const app = express();
const bodyparser = require('body-parser');


app.get('/',(req,res)=>{
  res.sendFile(__dirname+'index.html');
  
})

app.listen(3000,()=>{
    console.log('server started at 3000');
})
