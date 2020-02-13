import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a simply a test",
      "https://i.pinimg.com/236x/76/92/79/76927939ad6134c1b5b0fa472803ca4b--crochet-hats-kids-events.jpg"
    ),
    new Recipe(
      "A Test Recipe 2",
      "This is a simply a test",
      "https://i.pinimg.com/236x/76/92/79/76927939ad6134c1b5b0fa472803ca4b--crochet-hats-kids-events.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
