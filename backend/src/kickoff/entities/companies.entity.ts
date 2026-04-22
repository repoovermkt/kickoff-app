import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome_empresa!: string;

  @Column({ nullable: true })
  cidade_empresa!: string;

  @Column({ nullable: true })
  tempo_mercado!: string;

  @Column({ nullable: true })
  momento_negocio!: string;

  @CreateDateColumn()
  created_at!: Date;
}
