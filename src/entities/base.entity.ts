import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ nullable: true, precision: 6 })
  createdAt?: Date;

  @Column({ nullable: true, length: 60 })
  createdBy?: string;

  @UpdateDateColumn({ nullable: true, precision: 6 })
  updatedAt?: Date;

  @Column({ nullable: true, length: 60 })
  updatedBy?: string;
}
