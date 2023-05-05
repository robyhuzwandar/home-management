import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageEntity } from './entities/storage.entity';
import { Repository } from 'typeorm';
import { StorageBody } from './dto/StorageRequest.dto';

@Injectable()
export class StorageService {
  constructor(
    @InjectRepository(StorageEntity)
    private readonly repository: Repository<StorageEntity>,
  ) {}

  create(body: StorageBody) {
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

  update(id: string, body: StorageBody) {
    return this.repository.update(id, body);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
