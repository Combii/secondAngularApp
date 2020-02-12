import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test',
      'https://i.pinimg.com/236x/76/92/79/76927939ad6134c1b5b0fa472803ca4b--crochet-hats-kids-events.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a test',
      'https://i.pinimg.com/236x/76/92/79/76927939ad6134c1b5b0fa472803ca4b--crochet-hats-kids-events.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onClickedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
