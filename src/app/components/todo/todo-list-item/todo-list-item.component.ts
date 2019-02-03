import {
  Component,
  Input,
  HostListener,
} from "@angular/core";

import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent{
  @Input() content: TodoModel;
  protected showActionButton: boolean = false;

  @HostListener("mouseenter")
  onMouseEnter() {
    this.showActionButton = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.showActionButton = false;
  } 

  protected isCompleted(){
    return this.content.status.completed;
  }
}
