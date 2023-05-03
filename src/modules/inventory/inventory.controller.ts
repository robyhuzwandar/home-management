import { Body, Controller, Post } from '@nestjs/common';
import { InventoryBody } from './dto/InventoryRequest.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post('create')
  create(@Body() body: InventoryBody) {
    console.log({ body });
    return this.inventoryService.create(body);
  }
}
