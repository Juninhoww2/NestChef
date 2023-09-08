import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RecipeService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async searchRecipes(query: string) {
    const recipes = await this.prisma.recipe.findMany({
      where: {
        name: { contains: query },
      },
    });
    return recipes;
  }
}
