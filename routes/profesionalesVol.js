const {Router} = require('express')

const route = Router()


//Listar todos los datos
const {getProfesionales,postProfesionales,putProfesionales,deleteProfesionales} = require('../controllers/profesionalesVol')//Importando el controlador

route.get('/', getProfesionales)

route.post('/', postProfesionales)

route.put('/', putProfesionales)

route.delete('/', deleteProfesionales)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 