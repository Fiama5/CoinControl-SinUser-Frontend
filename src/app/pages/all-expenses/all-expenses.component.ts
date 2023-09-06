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
    this.loadCategories();
  }

  loadCategories() {
    // Llama al servicio para cargar la lista de categorías
    this.expenseService.getCategorys().subscribe((categories) => {
      this.categories = categories;

      // Luego, por cada categoría, carga los gastos relacionados
      this.categories.forEach((category) => {
        this.loadExpensesByCategory(category.id);
      });
    });
  }

  loadExpensesByCategory(categoryId: number) {
    // Llama al servicio para cargar los gastos relacionados con la categoría
    this.expenseService.getExpensesByCategory(categoryId).subscribe((expenses) => {
      this.categoryExpensesMap[categoryId] = expenses;
    });
  }


  // Función para eliminar un gasto
  deleteExpense(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
      this.expenseService.deleteExpense(id).subscribe(() => {
        // Después de eliminar con éxito, puedes volver a cargar los gastos
        this.loadCategories();
      });
    }
  }

      //Funcion para desplegar la lista de gastos de una categoria
      toggleCategory(categoryId: number) {
        this.expandedCategories[categoryId] = !this.expandedCategories[categoryId];
  
} }
