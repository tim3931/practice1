import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TestComponent } from './anothercomponents/test/test.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { from } from 'rxjs';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/Layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TestComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
