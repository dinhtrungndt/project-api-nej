import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsEntity } from "src/entities/cars.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CarsEntity])],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductsModule {};