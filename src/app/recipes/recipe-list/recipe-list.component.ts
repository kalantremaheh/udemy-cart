import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test desc','https://ichef.bbci.co.uk/news/976/cpsprodpb/E982/production/_109887795_gettyimages-153775715-1.jpg'),
    new Recipe('A test recipe', 'test desc','https://ichef.bbci.co.uk/news/976/cpsprodpb/E982/production/_109887795_gettyimages-153775715-1.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
