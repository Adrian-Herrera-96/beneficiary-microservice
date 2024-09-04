import { Module } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { FingerprintController } from './fingerprint.controller';

@Module({
  controllers: [FingerprintController],
  providers: [FingerprintService],
})
export class FingerprintModule {}
