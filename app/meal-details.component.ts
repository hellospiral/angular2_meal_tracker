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
    <h5> {{ meal.details }} <br>
      <br> {{ meal.calories }} calories<br>
      <br> eaten on: {{ meal.dateTime.substr(5, 2) + "/" + meal.dateTime.substr(8,2) + "/" + meal.dateTime.substr(0,4) }} at {{ meal.dateTime.substr(11, 5)}}
    </h5>
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
