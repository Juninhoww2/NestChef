import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Bolo de Chocolate',
      ingredients: ['ovos', 'açúcar', 'chocolate'],
      instructions: 'Passo a passo para fazer o bolo de chocolate...',
    },
    {
      id: 2,
      name: 'Pão de Queijo',
      ingredients: ['polvilho', 'queijo', 'óleo'],
      instructions: 'Passo a passo para fazer o pão de queijo...',
    },
  ];

  searchRecipes(query: string): Recipe[] {
    const recipesFound = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()),
    );
    return recipesFound;
  }
}
