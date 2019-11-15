import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/productos-nest',{ useNewUrlParser: true }), ProductosModule],
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0-jsmjq.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }), ProductosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
