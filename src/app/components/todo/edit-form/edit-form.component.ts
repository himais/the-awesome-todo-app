import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { TodoService } from "../../../services/todo/todo.service";
import { TodoModel } from "../../../models/todo/todo.model";

@Component({
  selector: "edit-form",
  templateUrl: "./edit-form.component.html"
})
export class EditFormComponent {
  private editForm: FormGroup;
  private isEditing: boolean = true;
  @Input() data: TodoModel;
  @Output() taskChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.editForm = new FormGroup({
      task: new FormControl()
    });

    this.editForm.valueChanges.subscribe(this.saveChanges.bind(this));
  }

  protected saveChanges() {
    this.todo.editTask(this.data.id, this.editForm.value.task);
    this.isEditing = false;
  }

  protected hideInput() {
    this.taskChanged.emit(this.isEditing);
  }
}
