const express = require("express");
const router = express.Router();
const {
  getEstudiantes,
  getEstudiante,
  createEstudiante,
  searchCedula,
  searchEmail,
  updateEstudiante,
  deleteEstudiante,
  uploadComprobante,
  rechazarEstudiante,
} = require("../controllers/estudiante");

router.get("/", getEstudiantes);

router.get("/:_id", getEstudiante);

router.post("/", createEstudiante);

router.put("/rechazar/:_id", rechazarEstudiante);


router.post("/searchCedula", searchCedula);

router.post("/searchEmail", searchEmail);

router.patch("/", updateEstudiante);

router.patch("/:_id", uploadComprobante);

router.delete("/:_id", deleteEstudiante);

module.exports = router;
