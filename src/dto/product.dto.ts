import {IsNotEmpty, IsNumber, MinLength} from 'class-validator';

export class ProductDto{
    @IsNotEmpty({message: 'Vui lòng nhập category_id !'})
    category_id?: number;
    @MinLength(5, {message: 'Vui lòng nhập trên 5 chữ !'})
    productName?: string;
    @IsNumber()
    price?: number;
}