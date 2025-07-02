import {Component, signal} from '@angular/core';
import {Greeting} from '../greeting/greeting';
import {Form} from '../form/form';



@Component({
  selector: 'app-home',
  imports: [Greeting, Form],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeMessage = signal('Welcome back!✨');
}
