import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = ['Toyota', 'Mazda', 'Honda'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById( @Param('id') id ) {
    return this.cars[id]
  }
  
}
