const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const profecionalesVol_Schema = ({
    nombre_profesional:{
        type: String,
        unique:true,
        required:[true, 'El nombre es requerido']
    },

    tipo_documento: {
        type:String,
        required:[true, 'El Tipo de documento es requerido'],
        enum:['CC', 'PASAPORTE', 'REGISTRO CIVIL'],
    },

    numero_documento:{
        type:String,
        required:[true, 'El numero de documento es requerido'],
    },

    estado_voluntario: {
        type:Boolean,
        required:[true, 'El estado del voluntario es requerido'],
        default:true
    },

    fecha_registro:{
        type: String,
        required:[true,"La fecha de registro es requerida"]
    },
})


module.exports = model('Profesional', profecionalesVol_Schema)
