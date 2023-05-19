import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.module';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})

export class RecipesItemComponent implements OnInit{
  @Input() recipe !: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(){}

  ngOnInit(){}

  onSelected(){
    this.recipeSelected.emit();
  }
}