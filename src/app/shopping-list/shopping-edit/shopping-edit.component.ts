import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm!:NgForm
  subscription!:Subscription
  editMode = false
  editedItemIndex!:number
  editItem!:Ingredient
  constructor(private SLService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.SLService.startingEditing.subscribe((index:number)=>{
      // console.log();
      this.editedItemIndex = index
      this.editMode = true
      this.editItem = this.SLService.getIngredien(index)
      this.slForm.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
      })
    })
  }

  onSubmit(form:NgForm){
    // const ingName = this.nameInputRef.nativeElement.value
    // const ingAmount = this.amountInputRef.nativeElement.value
    // console.log('--ingName--',ingName,'--ingAmount--',ingAmount)
    const value = form.value
    const newIngredient = new Ingredient(value.name,value.amount)
    if(this.editMode){
      this.SLService.updateIngredient(this.editedItemIndex,newIngredient) 
    }else{
      this.SLService.addIngredient(newIngredient)
    }

    this.editMode = false   
  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.SLService.deleteIngredient(this.editedItemIndex)
    this.onClear();

  }
}
