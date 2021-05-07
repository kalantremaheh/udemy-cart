import { Recipe } from './../../recipe.model';
import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any
  @Output() recipeSelected = new EventEmitter<void>()
  constructor() { 
    // this.recipe = ""
  }

  ngOnInit(): void {
    console.log(this.recipe);
  }

  onSelected(){
    this.recipeSelected.emit() 
  }

}
