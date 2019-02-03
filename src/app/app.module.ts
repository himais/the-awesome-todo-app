import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoFormComponent } from "./components/todo/todo-form/todo-form.component";
import { EditFormComponent } from "./components/todo/edit-form/edit-form.component";
import { TodoListComponent } from "./components/todo/todo-list/todo-list.component";
import { TodoListItemComponent } from "./components/todo/todo-list-item/todo-list-item.component";

import { TodoService } from "./services/todo/todo.service";

import { TodoModel } from "./models/todo/todo.model";

// import { TaskStatus } from "./helpers/task-status/task-status.model";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    EditFormComponent,
    TodoListItemComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
