import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A recipe', 'This is A', 
    'https://as2.ftcdn.net/v2/jpg/02/65/58/29/1000_F_265582946_D57tH8k6p377flQrhptz93w9bK9CN6AR.jpg'),
    new Recipe('B recipe', 'This is B', 
    'https://as2.ftcdn.net/v2/jpg/02/65/58/29/1000_F_265582946_D57tH8k6p377flQrhptz93w9bK9CN6AR.jpg'),
  ];

  constructor(){}

  ngOnInit(){}

  onRecipeSelected(recipe: Recipe){
    // console.log(recipe)
    this.recipeWasSelected.emit(recipe);
  }
}
