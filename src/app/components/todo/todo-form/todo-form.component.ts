import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent implements OnInit{
  private todoForm: FormGroup;
  @Input() content: TodoModel;

  constructor(private todo: TodoService) {}

  ngOnInit() {    
    this.setupForm();
    this.listenToForm();      
  }

  protected setupForm() {
    this.todoForm = new FormGroup({
      task: new FormControl()
    });
  }

  protected isCompleted(){
    return this.content.status.completed;
  }

  protected saveChanges() {
    this.todo.editTask(this.content.id, this.todoForm.get('task').value);
  }

  protected listenToForm(){
    this.todoForm.get('task').valueChanges.subscribe(this.saveChanges.bind(this));
  }
}
