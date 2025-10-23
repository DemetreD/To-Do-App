import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasklist',
  imports: [FormsModule],
  templateUrl: './tasklist.html',
  styleUrl: './tasklist.css'
})
export class Tasklist {

  // imagePath = 'assets/delete.png';

  newTask: string = '';

  

   taskList: { task: string; completed: boolean, category: string }[] = [
    { task: 'hello', completed: false, category: 'All'},
    { task: 'buy milk', completed: false, category: 'Groceries'}
  ];

  @Input () activeCategory!: string;

  

  addingTask(){
    if (this.newTask.trim() !== '') {
      this.taskList.push({ task: this.newTask, completed: false, category: this.activeCategory});
      this.newTask = '';
    }
  } 

  completedTask(index: number) {
    this.taskList[index].completed = !this.taskList[index].completed;
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }



}
