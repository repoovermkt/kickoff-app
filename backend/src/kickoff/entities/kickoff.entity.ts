import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('kickoffs')
export class Kickoff {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  client_id!: string;

  @Column()
  company_id!: string;

  @Column({ nullable: true })
  expectativas!: string;

  @Column({ nullable: true })
  dores_publico!: string;

  @Column({ nullable: true })
  objecoes!: string;

  @CreateDateColumn()
  created_at!: Date;
}
