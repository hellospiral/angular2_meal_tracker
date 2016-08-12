import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: "my-app",
  template: `
    <div class="container">
      <h1>Welcome to meal tracker!</h1>
      <h3 *ngFor="#meal of meals"> {{ meal.name }} </h3>
    </div>
  `
})
export class AppComponent{
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Greek Yogurt", "with almond butter and berries", 337, 0),
      new Meal("Chicken and Cheese", "cat food", 500, 0),
      new Meal("Bacon Burger", "eh...", 800, 0),
    ];
  }
}
