import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <form class="form-inline">
  <div class="form-group">
    <h3>Edit Name:</h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg task-form form-control">
    <h3>Edit Details:</h3>
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg task-form form-control">
    <h3>Edit Calories:</h3>
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg task-form form-control">
  </div>
</form>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
