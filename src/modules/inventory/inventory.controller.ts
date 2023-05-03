import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InventoryBody } from './dto/InventoryRequest.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post()
  create(@Body() body: InventoryBody) {
    console.log({ body });
    return this.inventoryService.create(body);
  }

  @Get()
  getAll() {
    return this.inventoryService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log({ id });
    return this.inventoryService.getOne(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() body: InventoryBody) {
    return this.inventoryService.update(id, body);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
