import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-header/recipe-header.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    console.log('Recipe item emitting ');
    this.recipeSelected.emit();
  }

}
