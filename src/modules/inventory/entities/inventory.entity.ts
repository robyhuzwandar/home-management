import { BaseEntity } from 'src/entities/base.entity';
import { StorageEntity } from 'src/modules/storage/entities/storage.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity('inventory')
export class InventoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qty: number;

  @ManyToOne(() => StorageEntity, (storage) => storage.inventory)
  storage: StorageEntity;
}
