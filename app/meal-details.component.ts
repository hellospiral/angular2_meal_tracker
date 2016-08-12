import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  styles: [`
    h5 {
      padding: 10px;
    }
  `],
  template: `
    <h5> Details: {{ meal.details }} <br><br> Calories: {{ meal.calories }}</h5>
  `
})
export class MealDetailsComponent{
  public meal: Meal;
}
