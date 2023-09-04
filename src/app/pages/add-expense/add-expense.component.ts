import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';



@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})

export class AddExpenseComponent implements OnInit {


  expense: Expense = {
    id: 0,
    amount: 0,
    description: '',
    date: '',
    category: {
      id: 0,
      name: ''
    }
  };



  categories: Category[] = [];
  selectedCategoryId: number = 0;

  constructor(private expenseService: ExpenseService) { }




  ngOnInit(): void {

    // Llamar al servicio para obtener la lista de categorías
    this.expenseService.getCategorys().subscribe(categories => {
      this.categories = categories;

    });



  }

  submitForm() {
    const categoryId = this.selectedCategoryId; // Obtén el categoryId de la lista desplegable

    this.expenseService.addExpense(this.expense, categoryId).subscribe(() => {
      // Limpia el formulario después de agregar el gasto
      this.expense = {
        id: 0,
        amount: 0,
        description: '',
        date: '',
        category: {
          id: 0,
          name: ''
        }
      };
      this.selectedCategoryId = 0; // Reinicia la selección de categoría
    });
  }

}
