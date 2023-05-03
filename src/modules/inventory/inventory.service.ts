import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InventoryEntity } from './entities/inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryBody } from './dto/InventoryRequest.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryEntity)
    private readonly repository: Repository<InventoryEntity>,
  ) {}

  create(body: InventoryBody) {
    return this.repository.save(body);
  }

  getAll() {
    return this.repository.find();
  }

  getOne(id: string) {
    return this.repository.findOneBy({
      id,
    });
  }

  update(id: string, body: InventoryBody) {
    return this.repository.update(id, body);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
