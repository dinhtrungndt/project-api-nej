import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('cars')
export class CarsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productName: string;

    @Column()
    category_id: number;
    
    @Column()
    price: number;
}