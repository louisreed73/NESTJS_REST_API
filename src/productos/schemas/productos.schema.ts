import {Schema} from 'mongoose';

export const productosSchema=new Schema({
        Ref:{
            type:String, required:true
        },
        nombre_producto:{
            type:String, required:true
        },
        precio:{
            type:Number, required:true
        },
        image:{
            type:String, required:false
        },
        opcion_oferta:{
            type:Boolean, required:true
        },
        createdAt:{
            type:Date, default:Date.now
        }
    });