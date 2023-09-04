import { Component } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent {

  categoryExpensesMap: { [key: number]: Expense[] } = {};
  expandedCategories: { [key: number]: boolean } = {}; //Expandir tarjeta
  categories: Category[] = [];
  
constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {

    // Llamar al servicio para obtener la lista de categorías
    this.expenseService.getCategorys().subscribe(categories => {
      this.categories = categories;


      this.categories.forEach(category => {
        this.expenseService.getExpensesByCategory(category.id).subscribe(expenses => {
          this.categoryExpensesMap[category.id] = expenses;
        });
      });
      
    });

    

  }

    //Funcion para desplegar la lista de gastos de una categoria
    toggleCategory(categoryId: number) {
      this.expandedCategories[categoryId] = !this.expandedCategories[categoryId];
    }
}
