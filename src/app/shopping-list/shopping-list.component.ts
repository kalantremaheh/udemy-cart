import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!:Ingredient[]
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
   this.ingredients =  this.shoppingListService.getIngredient();
  //  this.shoppingListService.ingredientsChanged.subscribe(
  //    (this.ingredients:Ingredient[]) => {
  //     this.ingredients = this.ingredients
  //    })
  }

  editItem(index:number){
    this.shoppingListService.startingEditing.next(index)
  }
  
}
