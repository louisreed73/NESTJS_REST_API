import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { productosDto } from './dto/productos.dto';
import {ProductosService} from './productos.service';
import {productosInterface} from './interfaces/productos.interface';
import { identifier } from '@babel/types';

@Controller('productos')
export class ProductosController {
    constructor(private readonly prodService: ProductosService) {}

  @Get("/")
  async getProductos(@Res() res) {
    const productos= await this.prodService.getProducts();
    res.status(HttpStatus.OK).json({
        mensaje:"Exitoso!!!",
        productos
    })
  }


  @Get("/:id")
  async getProducto(@Res() res,@Param("id") id) {
    const producto= await this.prodService.getProductId(id);

    if(!producto) throw new NotFoundException("Este producto no existe!!!!");
    res.status(HttpStatus.OK).json(
      
        producto
)
  }


  @Post('/create')
  async createProd(@Res() res, @Body() prodDTO:productosDto) {
      console.log(prodDTO)
      const nuevoProd= await this.prodService.createProduct(prodDTO);
      console.log(nuevoProd)

      return res.status(HttpStatus.OK).json({
          mensaje:"Recibido!!!1",
          prod:nuevoProd
      })

    }


    @Put('/update')
    async updateProd(@Res() res, @Body() prodDTO:productosDto,@Query("productID")  productID  ) {

        console.log("El id del producto es: ",productID)
  
        const updatedProd= await this.prodService.updateProduct(productID,prodDTO);
        console.log(updatedProd)

        if(!updatedProd) throw new NotFoundException("No existe este id de producto para UPDATED!!!!")
  
        return res.status(HttpStatus.OK).json(

        
)
  
      }


  @Delete('/delete')
  async deleteProd(@Res() res, @Query("productID") productID) {

      const deletedProd= await this.prodService.deleteProduct(productID);
      console.log(deletedProd)

      if(!deletedProd) throw new NotFoundException("No existe este id de producto para BORRAR!!!!")

      return res.status(HttpStatus.OK).json({
          mensaje:"Recibido!!!1",
          prod:deletedProd
      })

    }







}
