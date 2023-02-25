import { Test, TestingModule } from '@nestjs/testing';
import { CatsApiService } from './cats-api.service';

describe('CatsApiService', () => {
  let service: CatsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsApiService],
    }).compile();

    service = module.get<CatsApiService>(CatsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
