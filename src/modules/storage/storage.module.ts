import { StorageController } from './storage.controller';

import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageEntity } from './entities/storage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorageEntity])],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}
