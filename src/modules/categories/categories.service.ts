import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class CategoriesService{
    
    private products: Product[] = [
        {
            id: 1,
            categoryId: 2,
            price: 20000,
            productName: 'Bánh hột đậu',
        },
        {
            id: 2,
            categoryId: 3,
            price: 2000,
            productName: 'Bánh tiêu',
        }
    ]

    getProducts(): Product[]{
        return this.products
    }

    createProduct(productDto: ProductDto): Product{
        const product: Product = {
            id: Math.random(),
            ...productDto
        }
        this.products.push(product)
        return product;
    }

    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id))
    }

    updateProduct(productDto: ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;
        return this.products[index];
    }

    deleteProduct(id: number): boolean{
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1){
        this.products.splice(index, 1);
        return true;
        }
        return false;
    }
    
}