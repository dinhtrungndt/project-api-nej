import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { CarsEntity } from 'src/entities/cars.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CarsEntity)
    private readonly carsRepository: Repository<CarsEntity>,
  ) {}

  async getProducts(): Promise<CarsEntity[]> {
    return await this.carsRepository.find();
  }

  async createProduct(productDto: ProductDto): Promise<CarsEntity> {
    const product = this.carsRepository.create(productDto);
    return await this.carsRepository.save(product);
  }

  async detailProduct(id: number): Promise<CarsEntity> {
    const product = await this.carsRepository.findOne({ where: { id } });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async updateProduct(id: number, productDto: ProductDto): Promise<CarsEntity> {
    const product = await this.detailProduct(id);
    this.carsRepository.merge(product, productDto);
    return await this.carsRepository.save(product);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await this.carsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Product not found');
    }
    return true;
  }
}
