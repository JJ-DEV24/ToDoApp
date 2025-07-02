import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Task} from './task.interface';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  listOfTasks: Task[] = []
  taskForm = new FormGroup({
    title: new FormControl(''),
    due_date: new FormControl('')
  })

  onSubmit() {
    alert(
      this.taskForm.value.title + '|' + this.taskForm.value.due_date
    );
    let task: Task = {title: this.taskForm.value.title?.toString(), due_date: this.taskForm.value.due_date?.toString(),id: Math.random()}
    this.listOfTasks.push(task)
  }

  // protected readonly onsubmit = onsubmit;
  protected readonly console = console;
}

