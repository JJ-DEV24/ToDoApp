import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Task} from './task.interface';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DatePipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, MatExpansionModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule
    , MatDatepickerModule, FormsModule, MatTimepickerModule, MatFormFieldModule, DatePipe, MatSlideToggleModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {

  listOfTasks: Task[] = [{title: 'Task 1', date: '2025-08-01', time: new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toString(), id: 1, completed: false},
    {title: 'Task 2', date: '2025-07-01', time: new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toString(), id: 2, completed: true},
    {title: 'Task 3', date: '2020-06-01', time: new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toString(), id: 3, completed: true}]

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl(""),
  })

  onSubmit() {
    let task: Task = {title: this.taskForm.value.title?.toString(), date: this.taskForm.value.date?.toString(),
      time: this.taskForm.value.time?.toString(), id: Math.random(), completed: false}
    this.listOfTasks.push(task)
  }

  deleteTask(id: number) {
    this.listOfTasks = this.listOfTasks.filter(eachTask=> eachTask.id !== id)

  };

  // protected readonly onsubmit = onsubmit;
  protected readonly console = console;
  protected readonly FormControl = FormControl;

  };

