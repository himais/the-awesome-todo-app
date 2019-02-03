import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  HostListener,
  Input
} from "@angular/core";

// import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
  @Input() content: TodoModel;

  ngOnInit() {
    console.log("uhu1", this.content);
  }
}
