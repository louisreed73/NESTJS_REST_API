import {Document} from 'mongoose';

export interface productosInterface extends Document{

        readonly Ref:string;
        readonly nombre_producto:string;
        readonly precio:number;
        readonly image:string;
        readonly opcion_oferta:boolean;
        readonly createdAt: Date;

}