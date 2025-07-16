import {ChangeDetectionStrategy, Component} from '@angular/core';
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

  listOfTasks: Task[] = [{
    title: 'Remember to use ALL brain cells when learning about a new tech 🥲', date: '2025-07-16', time: new Date(Date.UTC(96, 1, 2,
      0, 0, 5)).toString(), id: 1, completed: false, editMode: false
  },
    {
      title: 'Build a to-do app: Angular forms & form validation 🫠', date: '2025-07-01', time: new Date(Date.UTC(96, 1, 2,
        16, 0, 5)).toString(), id: 2, completed: true, editMode: false
    },
    {
      title: 'Learn how to use the AsycnIO Python library to make asynchronous API requests 🤓', date: '2025-05-28', time: new Date(Date.UTC(96, 1, 2,
        21, 39, 5)).toString(), id: 3, completed: true, editMode: false
    }]

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl(""),
  })
  // protected readonly onsubmit = onsubmit;
  protected readonly console = console;
  protected readonly FormControl = FormControl;

  onSubmit() {
    let task: Task = {
      title: this.taskForm.value.title?.toString(), date: this.taskForm.value.date?.toString(),
      time: this.taskForm.value.time?.toString(), id: Math.random(), completed: false, editMode: false
    }
    this.listOfTasks.push(task)
  }

  deleteTask(id: number) {
    this.listOfTasks = this.listOfTasks.filter(eachTask => eachTask.id !== id)
  };

  onSubmitEdit(task: Task) {
    this.listOfTasks.map((eachTask) => {
      if (eachTask.id == task.id && task.editMode === true) {
        // console.log("task being passed")
        // console.log(JSON.stringify(task))
        // console.log("data from form being passed")
        // console.log(JSON.stringify(this.taskForm.value))
        eachTask.title = this.taskForm.value.title?.toString()
        eachTask.date = this.taskForm.value.date?.toString()
        eachTask.time = this.taskForm.value.time?.toString()
        eachTask.editMode = false
      }
    })
  }

  cancelEdit(task: Task) {
    this.listOfTasks.map((eachTask) =>  {
      if (eachTask.id == task.id && eachTask.editMode == true){
        eachTask.editMode = false
        eachTask.title = task.title
        eachTask.date = task.date
        eachTask.time = task.time
      }
    }
    )
  }
  editTask(task: Task) {
    this.listOfTasks.map((eachTask) => {
        if (eachTask.id == task.id && task.editMode === false) {
          task.editMode = true
        }
      }
    )
  }

}

