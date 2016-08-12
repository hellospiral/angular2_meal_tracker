import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: "my-app",
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Welcome to meal tracker!</h1>
      <meal-list [mealList]="meals"></meal-list>
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
