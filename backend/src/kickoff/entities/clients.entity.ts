import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome_completo!: string;

  @Column({ nullable: true })
  cargo!: string;

  @CreateDateColumn()
  created_at!: Date;
}
