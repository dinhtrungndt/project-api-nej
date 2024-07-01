import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductService } from './products.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ProductDto } from 'src/dto/product.dto';
import { CarsEntity } from 'src/entities/cars.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<ResponseData<CarsEntity[]>> {
    try {
      const products = await this.productService.getProducts();
      return new ResponseData<CarsEntity[]>(products, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<CarsEntity[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Post()
  async createProduct(@Body(new ValidationPipe()) productDto: ProductDto): Promise<ResponseData<CarsEntity>> {
    try {
      const product = await this.productService.createProduct(productDto);
      return new ResponseData<CarsEntity>(product, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<CarsEntity>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get('/:id')
  async detailProduct(@Param('id') id: number): Promise<ResponseData<CarsEntity>> {
    try {
      const product = await this.productService.detailProduct(id);
      return new ResponseData<CarsEntity>(product, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<CarsEntity>(null, HttpStatus.ERROR, 'Product not found');
    }
  }

  @Put('/:id')
  async updateProduct(@Body() productDto: ProductDto, @Param('id') id: number): Promise<ResponseData<CarsEntity>> {
    try {
      const product = await this.productService.updateProduct(id, productDto);
      return new ResponseData<CarsEntity>(product, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<CarsEntity>(null, HttpStatus.ERROR, 'Product not found');
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number): Promise<ResponseData<boolean>> {
    try {
      const result = await this.productService.deleteProduct(id);
      return new ResponseData<boolean>(result, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<boolean>(null, HttpStatus.ERROR, 'Product not found');
    }
  }
}
