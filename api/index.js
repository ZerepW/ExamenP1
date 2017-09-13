var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var eventos = require ('./models/eventos').eventos;
var actividades = require ('./models/actividades').eventos;

app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

app.get("/eventos",function(req,res){ 
    console.log("Solicitud de eventos");
    res.setHeader('Content-Type', 'application/json');
    res.send(eventos);
    res.end();
});
app.get("/actividades",function(req,res){ 
    
    console.log("Solicitud de actividades");
    res.setHeader('Content-Type', 'application/json');
    res.send(actividades);
    res.end();
});
app.post("/oauth/token",function(req,res){ 
    if(req.query.password == "Luis" && req.query.email=="luis@itesm.mx"){
        console.log("Bienvenido");
        res.send("eres bienvenido");
    }else{
        console.log(req.query.email );
        res.send("No eres bienvenido");
    }
});
app.delete("/eventos/:id",function(req,res){ 
    
    res.setHeader('Content-Type', 'application/json');
    res.send({id: req.params.id});
});

app.listen(8000);   