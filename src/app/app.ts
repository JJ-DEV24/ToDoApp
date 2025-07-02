import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './home/home';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [Home, Header],
  template: `
  <app-header/>
  <main>
    <app-home/>
  </main>`,

  // style main tag below to format the home component
  styles:[
    `
      main {
        padding: 16px;
      }
    `
  ]
  // styleUrl: './header.css', './home.css',
})
export class App {
  protected title = 'ToDoApp';
}
