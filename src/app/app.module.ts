import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { NewTodoFormComponent } from "./components/todo/new-todo-form/new-todo-form.component";
import { TodoFormComponent } from "./components/todo/todo-form/todo-form.component";
import { TodoListComponent } from "./components/todo/todo-list/todo-list.component";
import { TodoListItemComponent } from "./components/todo/todo-list-item/todo-list-item.component";
import { TodoIconComponent } from "./components/todo/todo-icon/todo-icon.component";

import { TodoService } from "./services/todo/todo.service";

import { TodoModel } from "./models/todo/todo.model";

// import { TaskStatus } from "./helpers/task-status/task-status.model";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoFormComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoListItemComponent,
    TodoIconComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
