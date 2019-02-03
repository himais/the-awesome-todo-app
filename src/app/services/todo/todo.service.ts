import { Injectable } from "@angular/core";
import { TodoModel } from "../../models/todo/todo.model";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todoList: TodoModel[] = [];

  //TODO: REMOVE THIS
  private setTemporaryData() {
    this.addTask("task 1");
    this.addTask("task 2");
    this.addTask("task 3");
  }

  public getTodoList() {
    return this.todoList;
  }

  public addTask(value: any) {
    this.todoList.push(new TodoModel(value));
    console.log(this.todoList);
  }

  public editTask(id: number, value: string) {
    const index = this.findIndex(id);
    this.todoList[index].description = value;
  }

  public deleteTask(id: any) {
    const index = this.findIndex(id);
    this.todoList.splice(index, 1);
  }

  public toggleTask(id: any) {
    const index = this.findIndex(id);
    this.todoList[index].status.completed = !this.todoList[index].status
      .completed;
  }

  private findIndex(id: number) {
    return this.todoList.findIndex(todo => todo.id === id);
  }
}
