"use strict"

var mongoose = require("mongoose");
var app = require("./app");
var port = 3000;
var admin = require("./src/controladores/usuario.controlador");
var deafultCategoria = require("./src/controladores/categoria.controlador");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify",false);
mongoose.connect("mongodb://localhost:27017/DBVentaOnline",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Conectado a la base de datos");
    admin.admin();
    deafultCategoria.deafultCategoria();
    app.listen(port,()=>{
        console.log("Servidor EXPRESS en funcionamiento");
    })
})
.catch((err)=>{
    console.log("Error",err);
})