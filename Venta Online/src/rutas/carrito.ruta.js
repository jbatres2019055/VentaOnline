"use strict"

var express = require("express");
var carritoControlador = require("../controladores/carrito.controlador");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.put("/añadiralCarrito/:id",mdAuth.ensureUser,carritoControlador.añadiralCarrito);

module.exports = api;