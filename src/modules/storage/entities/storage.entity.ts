import { BaseEntity } from 'src/entities/base.entity';
import { InventoryEntity } from 'src/modules/inventory/entities/inventory.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('storage')
export class StorageEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => InventoryEntity, (inventory) => inventory.storage)
  inventory: InventoryEntity[];
}
