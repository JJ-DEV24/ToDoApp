import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Task} from './task.interface';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {
  MatDatepicker,
  MatDatepickerControl,
  MatDatepickerModule,
  MatDatepickerPanel
} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, MatExpansionModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule
  , MatDatepickerModule,  FormsModule, MatTimepickerModule, MatFormFieldModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {

  listOfTasks: Task[] = []

  taskForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(""),
    time: new FormControl(""),
  })

  onSubmit() {
    let task: Task = {title: this.taskForm.value.title?.toString(), date: this.taskForm.value.date?.toString(),
      time: this.taskForm.value.time?.toString(), id: Math.random()}
    this.listOfTasks.push(task)
  }

  // protected readonly onsubmit = onsubmit;
  protected readonly console = console;
  protected readonly FormControl = FormControl;

  };


