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
import { TodoActionComponent } from "./components/todo/todo-action/todo-action.component";

import { TodoService } from "./services/todo/todo.service";

import { TodoModel } from "./models/todo/todo.model";
import { LogComponent } from './components/log/log/log.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserBarComponent } from './components/sidebar/user-bar/user-bar.component';
import { NoteBarComponent } from './components/sidebar/note-bar/note-bar.component';
import { SideLogoComponent } from './components/sidebar/items/side-logo/side-logo.component';
import { IconMenuComponent } from './components/sidebar/items/icon-menu/icon-menu.component';
import { UserProfileComponent } from './components/sidebar/items/user-profile/user-profile.component';
import { NoteDropdownComponent } from './components/sidebar/items/note-dropdown/note-dropdown.component';
import { NoteMenuComponent } from './components/sidebar/items/note-menu/note-menu.component';
import { LogHeaderComponent } from './components/log/log-header/log-header.component';
import { LogProgressComponent } from './components/log/log-progress/log-progress.component';

// import { TaskStatus } from "./helpers/task-status/task-status.model";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoFormComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoListItemComponent,
    TodoIconComponent,
    TodoActionComponent,
    LogComponent,
    SidebarComponent,
    UserBarComponent,
    NoteBarComponent,
    SideLogoComponent,
    IconMenuComponent,
    UserProfileComponent,
    NoteDropdownComponent,
    NoteMenuComponent,
    LogHeaderComponent,
    LogProgressComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
