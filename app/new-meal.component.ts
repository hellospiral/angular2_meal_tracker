import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: "new-meal",
  outputs: ['onSubmitNewMeal'],
  template: `
  <form id="input-form">
    <h3>Input a new meal: </h3>
    <div class="form-group">
      <input placeholder="Name" class="col-sm-8 input-lg form-control" #newMealName>
    </div>
      <div class="form-group">
        <input placeholder="Description" class="col-sm-8 input-lg form-control" #newMealDescription>
      </div>
      <div class="form-group">
        <input placeholder="Calories" class="col-sm-8 input-lg form-control" #newMealCalories>
      </div>
    <button (click)="addMeal(newMealName, newMealDescription, newMealCalories)" class="btn-success btn-lg add-button">Add</button>
  </form>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([userMealName.value, userDescription.value, userCalories.value]);
    userMealName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
