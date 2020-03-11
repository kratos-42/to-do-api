import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export class User extends BaseEntity {

    @PrimaryGeneratedColumn(id);

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
