import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
    <h3 *ngFor = '#meal of mealList'> {{ meal.name }}</h3>

  `
})
export class MealListComponent {
  public mealList: Meal[];

}
