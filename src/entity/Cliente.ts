import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "clientes" })
export class Cliente {

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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_At: Date
}
