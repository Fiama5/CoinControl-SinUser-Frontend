import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesComponent } from './pages/all-expenses/all-expenses.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 {path: 'all-expenses', component: AllExpensesComponent},
 {path:'add-expense', component: AddExpenseComponent},
 {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
