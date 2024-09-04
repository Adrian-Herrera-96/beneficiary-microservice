import { Test, TestingModule } from '@nestjs/testing';
import { FingerprintController } from './fingerprint.controller';
import { FingerprintService } from './fingerprint.service';

describe('FingerprintController', () => {
  let controller: FingerprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FingerprintController],
      providers: [FingerprintService],
    }).compile();

    controller = module.get<FingerprintController>(FingerprintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
