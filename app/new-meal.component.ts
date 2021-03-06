import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: "new-meal",
  outputs: ['onSubmitNewMeal'],
  template: `
  <hr>
  <form id="input-form">
    <h3>Input a new meal: </h3>
    <div class="form-group">
      <input placeholder="Name" class="col-sm-8 input-lg form-control" #newMealName>
    </div>
      <div class="form-group">
        <input placeholder="Details" class="col-sm-8 input-lg form-control" #newMealDescription>
      </div>
      <div class="form-group">
        <input placeholder="Calories" class="col-sm-8 input-lg form-control" #newMealCalories>
      </div>
      <div class="form-group">
        <input class="form-control" type="datetime-local" value="2016-08-12T13:45:00" id="example-datetime-local-input" #newMealDate>
      </div>
    <button (click)="addMeal(newMealName, newMealDescription, newMealCalories, newMealDate)" class="btn-success btn-lg add-button">Add</button>
  </form>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement, userDateTime: HTMLInputElement) {
    this.onSubmitNewMeal.emit([userMealName.value, userDescription.value, userCalories.value, userDateTime.value]);
    userMealName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
