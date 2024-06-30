import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ProductService } from "./products.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";

@Controller('products')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): ResponseData<string>{
        try {
        return new ResponseData<string>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
        return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post()
    createProduct(): ResponseData<string>{
        try {
        return new ResponseData<string>(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
        return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(): ResponseData<string> {
        try {
        return new ResponseData<string>(this.productService.detailProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
        return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(): ResponseData<string> {
        try {
        return new ResponseData<string>(this.productService.updateProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
        return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(): ResponseData<string>{
        try {
        return new ResponseData<string>(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
        return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}