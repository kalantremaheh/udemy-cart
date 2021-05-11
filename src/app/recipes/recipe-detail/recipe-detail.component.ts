import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe:any
  id!:number
  constructor(
    private route:ActivatedRoute,
    private recipeService: RecipeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
       this.id = +params['id'] 
       this.recipe = this.recipeService.getRecipe(this.id)
    }) 
  }

  onEditRecipe(){
     this.router.navigate(['edit'],{ relativeTo: this.route})
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['./recipes'])
  }
}
