"use strict"

var express = require("express");
var productoControlador = require("../controladores/producto.controlador");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.put("/setProducto/:id",[mdAuth.ensureUser,mdAuth.ensureAdmin],productoControlador.setProducto);
api.put("/:idC/updateProducto/:idP",[mdAuth.ensureUser,mdAuth.ensureAdmin],productoControlador.updateProducto);
api.put("/:idC/removeProducto/:idP",[mdAuth.ensureUser,mdAuth.ensureAdmin],productoControlador.removeProducto);
api.get("/getProductos",mdAuth.ensureUser,productoControlador.getProductos);
api.get("/searchProducto",mdAuth.ensureUser,productoControlador.searchProducto);
api.get("/spentProductos",mdAuth.ensureUser,productoControlador.spentProductos);

module.exports = api;