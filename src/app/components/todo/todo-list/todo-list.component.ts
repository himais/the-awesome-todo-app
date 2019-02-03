import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  HostListener
} from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit, OnChanges {
  protected todoList: TodoModel[] = [];
  protected edit: boolean = false;
  protected showActionButton: boolean = false;

  constructor(private todo: TodoService) {
    //TODO: REMOVE THIS
    this.todo.setTemporaryData();
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.showActionButton = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.showActionButton = false;
  }

  ngOnInit() {
    this.todoList = this.todo.getTodoList();
  }

  protected deleteTask(id: number) {
    this.todo.deleteTask(id);
  }

  protected toggleTask(id: number) {
    this.todo.toggleTask(id);
  }

  protected editTask(id: number, completed: boolean) {
    if (completed) return;
  }

  editChangedHandler(edit: boolean) {
    // this.edit = edit;
  }
}
