import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeSearchModule } from './recipe-search/recipe-search.module';

@Module({
  imports: [RecipeSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
