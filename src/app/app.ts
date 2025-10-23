import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Tasklist } from './tasklist/tasklist';

@Component({
  selector: 'app-root',
  imports: [Sidebar,Tasklist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');

  activeCategory: string = 'All'; 


  onCategoryChange(selected: string) {
    this.activeCategory = selected;
  }

}
