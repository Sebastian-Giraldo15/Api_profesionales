const {response} = require('express')

 const Profesional = require('../models/profesionalesVol')

const getProfesionales = async(req, res) => {
    const profesionales = await Profesional.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: profesionales
    })
}

const postProfesionales = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const profesionales = new Profesional(datos) //Instanciar el objeto
        await profesionales.save()//Guardar en la base de dato  
        // console.log(profesionales) 
    } catch(error) {
        mensaje = error
        // console.log(error)
    }

    res.json({
        msg: mensaje
    })
}

const putProfesionales = async(req, res) =>{
    const {nombre_profesional, tipo_documento, numero_documento, estado_voluntario, fecha_registro, preciodolar} = req.body
    try {
        const profesional = await Profesional.findOneAndUpdate({nombre_profesional: nombre_profesional},
            {tipo_documento:tipo_documento, numero_documento:numero_documento,estado_voluntario:estado_voluntario,fecha_registro:fecha_registro, preciodolar:preciodolar})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteProfesionales = async(req, res) =>{
    const {nombre_profesional} = req.body //Desestructurar
    try {
        const profesionales = await Profesional.findOneAndDelete({nombre_profesional: nombre_profesional})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getProfesionales,
    postProfesionales,
    putProfesionales,
    deleteProfesionales
}
