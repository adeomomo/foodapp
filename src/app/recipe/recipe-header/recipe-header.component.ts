import { Component } from '@angular/core';
import { Recipe } from './recipe-header.model';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css']
})
export class RecipeHeaderComponent {
  selectedRecipe: Recipe;


  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
