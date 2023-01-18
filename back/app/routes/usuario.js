const express = require("express");
const router = express.Router();
const {
  getUsuarios,
  getUsuario,
  createUsuario,
  searchUsername,
  searchEmail,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuario");

router.get("/", getUsuarios);

router.get("/:_id", getUsuario);

router.post("/", createUsuario);

router.post("/searchUsername", searchUsername);

router.post("/searchEmail", searchEmail);

router.patch("/", updateUsuario);

router.delete("/:_id", deleteUsuario);

module.exports = router;
