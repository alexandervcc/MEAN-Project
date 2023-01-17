const express = require('express')
const router = express.Router();
const { getEstudiantes , getEstudiante, createEstudiante, searchCedula, searchEmail,updateEstudiante, deleteEstudiante, updateComprobante} = require('../controllers/estudiante')

router.get('/', getEstudiantes)

router.get('/:_id', getEstudiante)

router.post('/', createEstudiante)

router.post('/searchCedula', searchCedula)

router.post('/searchEmail', searchEmail)

router.patch('/', updateEstudiante)
router.patch('/:_id', updateComprobante)


router.delete('/:_id', deleteEstudiante)


module.exports = router
