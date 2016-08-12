import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent],
  template: `
    <meal-display *ngFor = '#currentMeal of mealList' [meal]="currentMeal"></meal-display>
    <new-meal (onSubmitNewMeal)="createNewMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  createNewMeal(args: string[]): void {
    this.mealList.push(
      new Meal(args[0], args[1], parseInt(args[2]), this.mealList.length)
    );
  }
}
