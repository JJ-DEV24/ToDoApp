import {Component, signal} from '@angular/core';
import {Greeting} from '../greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeMessage = signal('Hello, You 😊❤️');
}
