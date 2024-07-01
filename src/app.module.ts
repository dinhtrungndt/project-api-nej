import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoriesModule } from './modules/categories/categories.module';
import { AccountEntity } from './entities/account.entity';
import { CarsEntity } from './entities/cars.entity';
import { CategoritesEntity } from './entities/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'trung123',
      database: 'project-api-nej',
      entities: [AccountEntity, CarsEntity, CategoritesEntity],
      synchronize: true,
    }),
    ProductsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
