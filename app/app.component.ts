import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: "my-app",
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Welcome to meal tracker!</h1>
      <hr>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent{
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Greek Yogurt", "with almond butter and berries", 337, 0, "2016-08-12T13:45:00"),
      new Meal("Chicken and Cheese", "plain american slice", 500, 0, "2016-08-12T13:45:00"),
      new Meal("Bacon Burger", "no fries", 800, 0, "2016-08-12T13:45:00")
    ];
  }
}
