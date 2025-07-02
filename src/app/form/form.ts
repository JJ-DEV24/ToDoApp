import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Task} from './task.interface';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, MatExpansionModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule
  , MatDatepickerModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {

  listOfTasks: Task[] = []
  taskForm = new FormGroup({
    title: new FormControl(''),
    due_date: new FormControl("")
  })

  onSubmit() {
    let task: Task = {title: this.taskForm.value.title?.toString(), due_date: this.taskForm.value.due_date?.toString(),id: Math.random()}
    this.listOfTasks.push(task)
  }

  // protected readonly onsubmit = onsubmit;
  protected readonly console = console;
  protected readonly FormControl = FormControl;
}

