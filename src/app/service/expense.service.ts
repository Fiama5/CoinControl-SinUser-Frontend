import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';
import { Category } from '../model/category';



@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addExpense(expense: Expense, categoryId: number): Observable<Expense> {
    // Agrega el categoryId como parámetro en la solicitud POST
    return this.http.post<Expense>(`${this.baseUrl}/expense/add?categoryId=${categoryId}`, expense);
  }

  getExpensesByCategory(categoryId: number): Observable<any> {
    const url = `${this.baseUrl}/expense/find/bycategory/${categoryId}`;
    return this.http.get(url);
  }

  
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/category/all`);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/expense/delete/${id}`);
  }

}
