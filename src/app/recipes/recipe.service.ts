import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  recipesChanged = new Subject<Recipe[]>();
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A veg recipe',
     'This is a veg recipe description',
     'https://thumbs.dreamstime.com/z/indian-food-collage-portrait-various-buffet-62770881.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',22)
    ]
     ),
    new Recipe('A chiken recipe',
     'This is a non-veg recipe description',
     'https://thumbs.dreamstime.com/z/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg',
    [
      new Ingredient('chiken',5),
      new Ingredient('oil',2)
    ]
     )
  ]

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes.slice()[index]
  }

  getSelectedRecipe(){

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    console.log('--delete recipe--',this.recipes.slice())
    this.recipesChanged.next(this.recipes.slice())
  }

}
