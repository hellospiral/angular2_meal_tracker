import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  outputs: ['onButtonClick'],
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
  public onButtonClick: EventEmitter<MealDetailsComponent>
  constructor() {
    this.onButtonClick = new EventEmitter();
  }
  clickButton() {
    this.onButtonClick.emit(this);
  }
}
