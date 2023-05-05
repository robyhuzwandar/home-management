import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageBody } from './dto/StorageRequest.dto';

@Controller()
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post()
  create(@Body() body: StorageBody) {
    console.log({ body });
    return this.storageService.create(body);
  }

  @Get()
  getAll() {
    return this.storageService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log({ id });
    return this.storageService.getOne(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() body: StorageBody) {
    return this.storageService.update(id, body);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.storageService.delete(id);
  }
}
