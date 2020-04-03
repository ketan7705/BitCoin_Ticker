const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var crypto =req.body.crypto;
    var fiat =req.body.fiat;
    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker";

    var finalURL = baseURL + crypto + fiat;


    request(finalURL,function(error,response,body){
        var data = JSON.parse(body);
        var price = data.last;

        var current = date.display_timestamp;
        res.write("<p>the current date" +current + "</p>")

        res.write("<h1>The current Price of "+ crypto+ " is "+ price + fiat +" !!!<S/h1>")
        res.send();
       
    });
});


app.listen(3000,function(){
    console.log("Your Server Starts At Port 3000 ");
});