import { Module } from '@nestjs/common';
import { RecipeSearchController } from './recipe-search.controller';

@Module({
  controllers: [RecipeSearchController]
})
export class RecipeSearchModule {}
