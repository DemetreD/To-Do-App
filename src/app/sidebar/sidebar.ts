import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  categories: string[] = ["All", "Groceries", "College", "Payments"];
  selectedCategory: string= 'All';

  @Output () category = new EventEmitter<string> ();

  onCategorySelect(cat: string) {
    this.selectedCategory = cat;
    this.category.emit(cat);
  } 

}
