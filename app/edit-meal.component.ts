import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  outputs: ['onButtonClick'],
  styles: [`
      .editInputs {
        display: inline;
      }
    `],
  template: `
  <form class="form-inline">
  <div class="form-group">
    <h3>Edit Name:</h3>
    <input [(ngModel)]="meal.name" class="editInputs col-sm-8 input-lg task-form form-control"><br>
    <h3>Edit Details:</h3>
    <input [(ngModel)]="meal.details" class="editInputs col-sm-8 input-lg task-form form-control"><br>
    <h3>Edit Calories:</h3>
    <input [(ngModel)]="meal.calories" class="editInputs col-sm-8 input-lg task-form form-control"><br>
    <button (click)="editGoAway(meal)" class="btn btn-info">Ok</button>
  </div>
</form>
  `
})
export class EditMealComponent {
  public meal: Meal;
  public onButtonClick: EventEmitter<Meal>;
  constructor() {
    this.onButtonClick = new EventEmitter();
  }
  editGoAway(meal: Meal) {
    this.onButtonClick.emit(meal);
  }
}
