import {
  Component,
  OnInit,
  Input,
  HostListener,
} from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
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

  constructor(private todo: TodoService) {
    //TODO: REMOVE THIS
  }

  ngOnInit() {
  }

  protected isCompleted(){
    return this.content.status.completed;
  }  

  protected deleteTask(id: number) {
    this.todo.deleteTask(id);
  }
}
