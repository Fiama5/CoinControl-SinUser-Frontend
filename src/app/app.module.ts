import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { AllExpensesComponent } from './pages/all-expenses/all-expenses.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    AddExpenseComponent,
    AllExpensesComponent,
    LoginComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
