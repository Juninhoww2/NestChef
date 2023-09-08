import { Controller, Get, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeSearchController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('search')
  searchRecipes(@Query('query') query: string) {
    return this.recipeService.searchRecipes(query);
  }
}
