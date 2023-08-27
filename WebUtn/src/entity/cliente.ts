import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class cliente {

    @PrimaryColumn()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    apellido1: number;

    @Column()
    apellido2: number;

    @Column()
    fechaacimiento: Date;

    @Column()
    genero: string;

    @Column()
    estado: boolean;
}