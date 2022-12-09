import { Test, TestingModule } from '@nestjs/testing';
import { ArkaLibraryService } from './arka-library.service';

describe('ArkaLibraryService', () => {
  let service: ArkaLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArkaLibraryService],
    }).compile();

    service = module.get<ArkaLibraryService>(ArkaLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
