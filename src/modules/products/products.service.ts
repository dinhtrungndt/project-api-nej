import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService{
    
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
        return this.products;
    }

    createProduct(): string{
        return 'POST PRODUCTS'
    }

    detailProduct(): string {
        return 'DETAIL PRODUCTS'
    }

    updateProduct(): string {
        return 'UPDATE PRODUCT'
    }

    deleteProduct(): string{
        return 'DELETE PRODUCT'
    }
    
}