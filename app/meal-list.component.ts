import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie.pipe';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriePipe],
  styles: [`
      .meals {
        padding-top: 50px;
      }
    `],
  template: `
    <h2 *ngIf="total">{{ summedCalories }} Calories</h2>
    <button type="button" (click)="totalCalories()" class="centerButton btn btn-primary btn-lrg">Calculate Today's Total Calories</button>
    <hr>
    <h3>Show:</h3>
    <select (change)="onChange($event.target.value)">
      <option value = "High">High Calorie Meals</option>
      <option value = "Low">Low Calorie Meals</option>
      <option selected value = "All">All Meals</option>
    </select>
    <hr>
    <meal-display
      *ngFor = '#currentMeal of mealList | calorie:selectedOption'
      [meal]="currentMeal"
      (onEditClick)="mealClicked(currentMeal)">
    </meal-display>
    <hr>
    <edit-meal
      *ngIf="selectedMeal"
      [meal]="selectedMeal"
      (onButtonClick)="editGoAway()">
      </edit-meal>
    <new-meal
      (onSubmitNewMeal)="createNewMeal($event)"
      (onSubmitNewMeal)="totalCalories()">
    </new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public summedCalories: number = 0;
  public selectedOption: string = "All";
  public total: boolean = false;
  createNewMeal(args: string[]): void {
    this.mealList.push(
      new Meal(args[0], args[1], parseInt(args[2]), this.mealList.length, args[3])
    );
  }
  mealClicked(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  onChange(option: string) {
    this.selectedOption = option;
  }
  editGoAway() {
    this.selectedMeal = undefined;
  }
  totalCalories() {
    this.summedCalories = 0;
    this.total = true;
    var mealsArray = this.mealList;
    for (var i = 0; i < mealsArray.length; i++) {
      this.summedCalories += mealsArray[i].calories;
    }
  }

}
