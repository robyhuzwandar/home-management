import { BaseEntity } from 'src/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('inventory')
export class InventoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qty: number;
}
