import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { CreateFingerprintDto } from './dto/create-fingerprint.dto';
import { UpdateFingerprintDto } from './dto/update-fingerprint.dto';

@Controller('fingerprint')
export class FingerprintController {
  constructor(private readonly fingerprintService: FingerprintService) {}

  @Post()
  create(@Body() createFingerprintDto: CreateFingerprintDto) {
    return this.fingerprintService.create(createFingerprintDto);
  }

  @Get()
  findAll() {
    return this.fingerprintService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fingerprintService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFingerprintDto: UpdateFingerprintDto) {
    return this.fingerprintService.update(+id, updateFingerprintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fingerprintService.remove(+id);
  }

  @Get('person/:id')
  getFingerprints(@Param('id') id: string) {
    return this.fingerprintService.getFingerprints(+id);
  }
}
