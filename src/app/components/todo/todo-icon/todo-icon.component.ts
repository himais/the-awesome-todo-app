import { Component, Input } from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-icon",
  templateUrl: "./todo-icon.component.html",
  styleUrls: ["./todo-icon.component.css"]
})
export class TodoIconComponent{
  @Input() content: TodoModel;

  constructor(private todo: TodoService) {}

  protected isCompleted(){
    return this.content.status.completed;
  }

  protected toggleTask(id: number) {
    this.todo.toggleTask(id);
  }
}
