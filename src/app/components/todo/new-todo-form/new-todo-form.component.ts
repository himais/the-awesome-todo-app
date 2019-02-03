import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TodoService } from "../../../services/todo/todo.service";

@Component({
  selector: "new-todo-form",
  templateUrl: "./new-todo-form.component.html"
})
export class NewTodoFormComponent implements OnInit {
  private todoForm: FormGroup;
  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      todo: new FormControl()
    });
  }

  submitForm() {
    if (this.todoForm.valid) {
      this.todo.addTask(this.todoForm.value.todo);
    }

    this.todoForm.reset();
  }

  resetForm() {}
}
