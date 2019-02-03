import { Component, Input, HostListener, } from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-action",
  templateUrl: "./todo-action.component.html",
  styleUrls: ["./todo-action.component.css"]
})
export class TodoActionComponent{
  @Input() content: TodoModel;
  public isActive: boolean = false;

  constructor(private todo: TodoService) {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.isActive = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.isActive = false;
  } 

  protected toggleMenu(){
    this.isActive = !this.isActive;
  }
  
  protected deleteTask(id: number) {
    this.todo.deleteTask(id);
  }
}
