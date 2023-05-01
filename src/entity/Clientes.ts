import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Clientes {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    endereco: string
}
