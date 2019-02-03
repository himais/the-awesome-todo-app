import {
  Component,
  OnInit,
} from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  protected todoList: TodoModel[] = [];

  constructor(private todo: TodoService) {
  }

  ngOnInit() {
    //TODO: REMOVE THIS
    this.todo.setTemporaryData();
    this.todoList = this.todo.getTodoList();
  }
}
