import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [MealDetailsComponent],
  template: `
    <h3 (mouseenter)="showDetails(meal)"> {{ meal.name }} </h3>
    <meal-details *ngIf="detailsMeal" [meal] = 'detailsMeal'> </meal-details>
  `
})
export class MealComponent {
  public meal: Meal;
  public detailsMeal: Meal;
  showDetails(meal) {
    this.detailsMeal = meal;
  }
}
