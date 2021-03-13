"use strict"

var express = require("express");
var categoriaControlador = require("../controladores/categoria.controlador");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.post("/crearCategoria",[mdAuth.ensureUser,mdAuth.ensureAdmin],categoriaControlador.crearCategoria);
api.put("/actualizarCategoria/:id",[mdAuth.ensureUser,mdAuth.ensureAdmin],categoriaControlador.actualizarCategoria);
api.delete("/eliminarCategoria/:id",[mdAuth.ensureUser,mdAuth.ensureAdmin],categoriaControlador.eliminarCategoria);
api.get("/obtenerCategoria",mdAuth.ensureUser,categoriaControlador.obtenerCategoria);
api.get("/buscarCategoria",mdAuth.ensureUser,categoriaControlador.buscarCategoria);

module.exports = api;