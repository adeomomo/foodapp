import { Component, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-header/recipe-header.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe 1',
    'My new test recipe 1',
    'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg' ),
    new Recipe('A test recipe 2',
    'My new test recipe 2',
    'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg' ),
    new Recipe('A test recipe 3',
    'My new test recipe 3',
    'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg' ),
    new Recipe('A test recipe 4',
    'My new test recipe 4',
    'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg' )
  ];

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  //  }

   onRecipeSelected(recipe: Recipe) {
    console.log('Recipe List emitting ' + recipe);
    this.recipeWasSelected.emit(recipe);
  }

}


