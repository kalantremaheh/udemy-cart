import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild,Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInputRef!: ElementRef 
  @ViewChild('amountInput',{static: false}) amountInputRef!: ElementRef 
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    console.log('--ingName--',ingName,'--ingAmount--',ingAmount)
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }

}
