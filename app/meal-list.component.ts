import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriePipe],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value = "High">High Calorie Meals</option>
      <option value = "Low">Low Calorie Meals</option>
      <option value = "All">All Meals</option>
    </select>
    <meal-display
      *ngFor = '#currentMeal of mealList | calorie:selectedOption'
      [meal]="currentMeal"
      (click)="mealClicked(currentMeal)">
    </meal-display>
    <hr>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <new-meal (onSubmitNewMeal)="createNewMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public selectedOption: string = "All";
  createNewMeal(args: string[]): void {
    this.mealList.push(
      new Meal(args[0], args[1], parseInt(args[2]), this.mealList.length)
    );
  }
  mealClicked(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  onChange(option: string) {
    this.selectedOption = option;
  }
}
