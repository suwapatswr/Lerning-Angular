import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe !: Recipe;

  constructor() {}

  ngOnInit() {} 
}
