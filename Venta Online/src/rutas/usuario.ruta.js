"use strict"

var express = require("express");
var userController = require("../controladores/usuario.controlador");
var api = express.Router();
var mdAuth = require("../middlewares/authenticated");

api.post("/login",userController.login);
api.post("/register",userController.register);
api.put("/actualizarUsuario/:id",mdAuth.ensureUser,userController.actualizarUsuario);
api.delete("/eliminarUsuario/:id",mdAuth.ensureUser,userController.eliminarUsuario);

module.exports = api;