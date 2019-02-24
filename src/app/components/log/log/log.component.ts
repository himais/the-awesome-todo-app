import { Component } from '@angular/core';

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent{
  protected todoList: TodoModel[] = [];

  constructor(private todo: TodoService) {
  }
}
