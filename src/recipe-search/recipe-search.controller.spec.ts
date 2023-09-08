import { Test, TestingModule } from '@nestjs/testing';
import { RecipeSearchController } from './recipe-search.controller';

describe('RecipeSearchController', () => {
  let controller: RecipeSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeSearchController],
    }).compile();

    controller = module.get<RecipeSearchController>(RecipeSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
