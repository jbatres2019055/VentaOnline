"use strict"

var express = require("express");
var facturaControlador = require("../controladores/factura.controlador");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.put("/addFactura",mdAuth.ensureUser,facturaControlador.addFactura);
api.get("/getFacturas",mdAuth.ensureUser,facturaControlador.getFacturas);
api.get("/getProductosFactura/:id",[mdAuth.ensureUser,mdAuth.ensureAdmin],facturaControlador.getProductosFactura);
api.get("/getMasProductos",mdAuth.ensureUser,facturaControlador.getMasProductos);

module.exports = api;