import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {productosDto} from './dto/productos.dto';
import {productosInterface} from './interfaces/productos.interface';

@Injectable()
export class ProductosService {
    constructor(@InjectModel("Productos")  readonly productosModel: Model<productosInterface>) {}

   async getProducts(): Promise<productosInterface[]>{

        let producto= await this.productosModel.find();

        return producto
        
    }
   async getProductId(id:string): Promise<productosInterface>{

        let producto= await this.productosModel.findById(id);

        return producto
        
    }
   async createProduct(prod:productosDto): Promise<productosInterface>{

        const nuevoProd=new this.productosModel(prod)
        await nuevoProd.save();
        return nuevoProd;
        
    }
    async updateProduct(id:string,producto:productosDto): Promise<productosInterface>{
        
        let productoUpdated= await this.productosModel.findByIdAndUpdate(id,producto);
        return productoUpdated;
        
        
    }
    
    async deleteProduct(id:string): Promise<productosInterface>{
 
     let producto= await this.productosModel.findByIdAndDelete(id);
 
     return producto
 
         
     }








}
