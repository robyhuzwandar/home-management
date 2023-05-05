import { StorageModule } from './modules/storage/storage.module';
import { StorageService } from './modules/storage/storage.service';
import { InventoryModule } from './modules/inventory/inventory.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryEntity } from './modules/inventory/entities/inventory.entity';
import { StorageEntity } from './modules/storage/entities/storage.entity';

@Module({
  imports: [
    StorageModule,
    InventoryModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [InventoryEntity, StorageEntity],
      migrations: ['dist/db/migrations/*.js'],
    }),
  ],
  controllers: [],
  providers: [StorageService],
})
export class AppModule {}
