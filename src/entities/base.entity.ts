import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ nullable: true, precision: 6 })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true, precision: 6 })
  updatedAt?: Date;
}
