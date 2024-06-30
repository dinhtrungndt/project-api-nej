import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): string{
        return this.productService.getProducts();
    }

    @Post()
    createProduct(): string{
        return this.productService.createProduct();
    }

    @Get('/:id')
    detailProduct(): string {
        return this.productService.detailProduct();
    }

    @Put('/:id')
    updateProduct(): string {
        return this.productService.updateProduct();
    }

    @Delete('/:id')
    deleteProduct(): string{
        return this.productService.deleteProduct();
    }
}