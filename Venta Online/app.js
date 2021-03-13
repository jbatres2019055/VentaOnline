"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var usuarioRutas = require("./src/rutas/usuario.ruta");
var categoriaRutas = require("./src/rutas/categoria.ruta");
var productoRutas = require("./src/rutas/producto.ruta");
var carritoRutas = require("./src/rutas/carrito.ruta");
var facturaRutas = require("./src/rutas/factura.ruta");


var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/v1",usuarioRutas);
app.use("/v1",categoriaRutas);
app.use("/v1",productoRutas);
app.use("/v1",carritoRutas);
app.use("/v1",facturaRutas);

module.exports = app;