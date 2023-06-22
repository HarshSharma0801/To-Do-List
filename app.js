const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs  = require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

var items =[] ;
var Number ;
app.get('/',(req,res)=>{
 var today = new Date();
 var options = {
   weekday:"long",
   day:"numeric",
   month:"long"
 }
 var day = today.toLocaleDateString("en-US",options);

 res.render("index",{MainDay:day , Task:items });


})

app.post("/",(req,res)=>{
  var item = req.body.NewTask;
   items.push(item);
  
   console.log(req.body.NewTask);
   res.redirect('/');

})

app.listen(3000,()=>{
    console.log('server started at 3000');
})
