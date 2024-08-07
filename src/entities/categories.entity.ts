import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('category')
export class CategoritesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    desctiption: string;
}