import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
   ingredientsChanged = new EventEmitter <Ingredient[]>()
   startingEditing = new Subject<number>()
  private ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',15)
  ];
  constructor() { }

  getIngredient(){
    return this.ingredients;
  }

  getIngredien(index:number){
    return this.ingredients[index]
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}
