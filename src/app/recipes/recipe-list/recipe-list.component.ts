import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  recipes:any;
  
  constructor(
    private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.recipes =  this.recipeService.getRecipes() 
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
