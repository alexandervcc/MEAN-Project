const estudianteModel = require("../models/estudiante");

const getEstudiantes = async (req, res) => {
  const filters = {};

  const estado_inscripcion = req.query.estado_inscripcion;

  if (estado_inscripcion) {
    filters.estado_inscripcion = estado_inscripcion;
  }

  try {
    const listAll = await estudianteModel.find({ ...filters });
    res.send(listAll);
  } catch (error) {
    res.send(error);
  }
};

const searchCedula = async (req, res) => {
  try {
    const { cedula_estudiante } = req.body;
    const estudiante = await estudianteModel.findOne({ cedula_estudiante });
    if (estudiante._id != null) {
      res.send(estudiante);
    } else {
      res.send("Not estudent");
    }
  } catch (error) {
    res.send(error);
  }
};

const searchEmail = async (req, res) => {
  try {
    const { correo_estudiante } = req.body;
    const estudiante = await estudianteModel.findOne({ correo_estudiante });
    if (estudiante._id != null) {
      res.send(estudiante);
    } else {
      res.send("Not estudent");
    }
  } catch (error) {
    res.send(error);
  }
};

const getEstudiante = async (req, res) => {
  try {
    const { _id } = req.body;
    const estudiante = await estudianteModel.findOne({ _id });
    res.send({ data: estudiante });
  } catch (error) {
    res.send(error);
  }
};

const createEstudiante = async (req, res) => {
  try {
    const {
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante,
    } = req.body.estudiante;

    const resDetail = await estudianteModel.create({
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante,
      createdAt: new Date(),
      estado_inscripcion: true,
    });

    res.send({ data: resDetail });
  } catch (error) {
    if (error && error.code === 11000) {
      return res.status(400).send({
        error: `Atributos con valor duplicado`,
        details: error.keyValue,
      });
    }
    return res.status(500);
  }
};

const updateEstudiante = async (req, res) => {
  try {
    const {
      _id,
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante,
    } = req.body;
    let resDetail = await estudianteModel.findOneAndUpdate(
      { _id },
      {
        nombre_estudiante,
        cedula_estudiante,
        correo_estudiante,
        telefono_estudiante,
        tipo_estudiante,
        curso_estudiante,
      }
    );
    res.send({ data: resDetail });
  } catch (error) {
    res.send(error);
  }
};

const deleteEstudiante = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const resDetail = await estudianteModel.findOneAndDelete({ _id });
    const listAll = await estudianteModel.find({});

    res.send({ data: listAll });
  } catch (error) {
    res.send(error);
  }
};

const uploadComprobante = async (req, res) => {
  try {
    const { _id, comprobante } = req.body;
    let resDetail = await estudianteModel.findOneAndUpdate(
      { _id },
      { comprobante }
    );
    res.send({ data: resDetail });
  } catch (error) {
    res.send(error);
  }
};

const rechazarEstudiante = async (req, res) => {
  try {
    const { _id } = req.params;
    await estudianteModel.findOneAndUpdate(
      { _id },
      {
        estado_inscripcion: false,
      }
    );
    res
      .status(200)
      .send({ message: "Estado de estudiante cambiado a rechazado." });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Error en el servidor, intentar mas tarde." });
  }
};

module.exports = {
  getEstudiantes,
  getEstudiante,
  searchEmail,
  searchCedula,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
  uploadComprobante,
  rechazarEstudiante,
};
