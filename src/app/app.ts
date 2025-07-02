import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './home/home';
import {Header} from './header/header';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [Home, Header, MatCard, MatCardContent],
  template: `
  <app-header/>
  <main>
    <mat-card>
      <mat-card-content>
            <app-home/>
      </mat-card-content>
    </mat-card>
  </main>
  `,

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
