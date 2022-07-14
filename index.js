// var http=require('http');
// var server=http.createServer((req,res)=>{
//     res.write("Hello");
//     res.end();
// });
// server.listen(1000);
// console.log("Server Running on 1000 port");

var express=require('express');
var app=express();
app.use('/',(req,res)=>
{
    res.send("Hello Express");
});
app.listen(1000);