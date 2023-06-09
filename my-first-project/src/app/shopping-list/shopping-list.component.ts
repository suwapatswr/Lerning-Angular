import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit{
  Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(){}

  ngOnInit(){}

  onIngredientAdded(ingredient: Ingredient){
    this.Ingredients.push(ingredient);
  }
}
